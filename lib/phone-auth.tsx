'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';
import { Lock } from 'lucide-react';
import { useI18n } from './i18n';

export interface ContactData {
  id: number;
  page: string;
  name: string;
  role: string;
  phone: string;
  sort_order: number;
  parent_id: string | null;
}

interface PhoneAuthContextType {
  unlocked: boolean;
  requestUnlock: () => void;
  getPhone: (page: string, name: string) => string;
  pageContacts: (page: string) => ContactData[];
}

const PhoneAuthContext = createContext<PhoneAuthContextType>({
  unlocked: false,
  requestUnlock: () => {},
  getPhone: () => '',
  pageContacts: () => [],
});

export function usePhoneAuth() {
  return useContext(PhoneAuthContext);
}

export function PhoneAuthProvider({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const { locale } = useI18n();

  const requestUnlock = useCallback(() => {
    if (!unlocked) setShowModal(true);
  }, [unlocked]);

  const getPhone = useCallback((page: string, name: string): string => {
    if (!unlocked) return '';
    const match = contacts.find(c => c.page === page && c.name === name);
    if (match) return match.phone;
    // Fallback: look up from contacts page data (all staff are listed there)
    const fallback = contacts.find(c => c.page === 'contacts' && c.name === name);
    return fallback?.phone || '';
  }, [unlocked, contacts]);

  const getPageContacts = useCallback((page: string): ContactData[] => {
    if (!unlocked) return [];
    return contacts.filter(c => c.page === page);
  }, [unlocked, contacts]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const data = await res.json();
        setContacts(data);
        setUnlocked(true);
        setShowModal(false);
        setPassword('');
        setError(false);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const labels = {
    title: { he: 'גישה למספרי טלפון', en: 'Access Phone Numbers', ru: 'Доступ к телефонам' },
    desc: { he: 'הזן סיסמה כדי לצפות במספרי הטלפון', en: 'Enter password to view phone numbers', ru: 'Введите пароль для просмотра номеров' },
    placeholder: { he: 'סיסמה', en: 'Password', ru: 'Пароль' },
    submit: { he: 'כניסה', en: 'Enter', ru: 'Войти' },
    errorMsg: { he: 'סיסמה שגויה', en: 'Wrong password', ru: 'Неверный пароль' },
    cancel: { he: 'ביטול', en: 'Cancel', ru: 'Отмена' },
    loading: { he: 'טוען...', en: 'Loading...', ru: 'Загрузка...' },
  };

  return (
    <PhoneAuthContext.Provider value={{ unlocked, requestUnlock, getPhone, pageContacts: getPageContacts }}>
      {children}
      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 px-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl text-center space-y-5" onClick={e => e.stopPropagation()}>
            <div className="mx-auto w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
              <Lock size={24} className="text-gray-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{labels.title[locale]}</h2>
              <p className="text-gray-400 text-sm mt-1">{labels.desc[locale]}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="password"
                value={password}
                onChange={e => { setPassword(e.target.value); setError(false); }}
                placeholder={labels.placeholder[locale]}
                className={`w-full border ${error ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                autoFocus
                disabled={loading}
              />
              {error && <p className="text-red-500 text-sm">{labels.errorMsg[locale]}</p>}
              <button type="submit" disabled={loading} className="w-full bg-gray-900 text-white font-bold rounded-xl px-4 py-3 hover:bg-gray-800 transition-colors disabled:opacity-50">
                {loading ? labels.loading[locale] : labels.submit[locale]}
              </button>
              <button type="button" onClick={() => setShowModal(false)} className="w-full text-gray-400 text-sm hover:text-gray-600 transition-colors">
                {labels.cancel[locale]}
              </button>
            </form>
          </div>
        </div>
      )}
    </PhoneAuthContext.Provider>
  );
}
