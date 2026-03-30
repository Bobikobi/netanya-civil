'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';
import { Lock } from 'lucide-react';
import { useI18n } from './i18n';

const PASSWORD = 'ADMIN';

interface PhoneAuthContextType {
  unlocked: boolean;
  requestUnlock: () => void;
}

const PhoneAuthContext = createContext<PhoneAuthContextType>({ unlocked: false, requestUnlock: () => {} });

export function usePhoneAuth() {
  return useContext(PhoneAuthContext);
}

export function PhoneAuthProvider({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { locale } = useI18n();

  const requestUnlock = useCallback(() => {
    if (!unlocked) setShowModal(true);
  }, [unlocked]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === PASSWORD) {
      setUnlocked(true);
      setShowModal(false);
      setPassword('');
      setError(false);
    } else {
      setError(true);
    }
  }

  const labels = {
    title: { he: 'גישה למספרי טלפון', en: 'Access Phone Numbers', ru: 'Доступ к телефонам' },
    desc: { he: 'הזן סיסמה כדי לצפות במספרי הטלפון', en: 'Enter password to view phone numbers', ru: 'Введите пароль для просмотра номеров' },
    placeholder: { he: 'סיסמה', en: 'Password', ru: 'Пароль' },
    submit: { he: 'כניסה', en: 'Enter', ru: 'Войти' },
    errorMsg: { he: 'סיסמה שגויה', en: 'Wrong password', ru: 'Неверный пароль' },
    cancel: { he: 'ביטול', en: 'Cancel', ru: 'Отмена' },
  };

  return (
    <PhoneAuthContext.Provider value={{ unlocked, requestUnlock }}>
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
              />
              {error && <p className="text-red-500 text-sm">{labels.errorMsg[locale]}</p>}
              <button type="submit" className="w-full bg-gray-900 text-white font-bold rounded-xl px-4 py-3 hover:bg-gray-800 transition-colors">
                {labels.submit[locale]}
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

/** Wrapper for phone display: shows masked text + lock icon if not unlocked */
export function ProtectedPhone({ phone, children }: { phone: string; children: React.ReactNode }) {
  const { unlocked, requestUnlock } = usePhoneAuth();

  if (unlocked) return <>{children}</>;

  return (
    <button onClick={requestUnlock} className="flex items-center gap-1.5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
      <Lock size={12} />
      <span className="text-xs">●●●-●●●●●●●</span>
    </button>
  );
}
