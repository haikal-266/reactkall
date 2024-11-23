import { createContext, useContext, useState } from "react";

export const UserContext = createContext(); // Tambahkan ekspor di sini

export const UserAuth = () => {
    return useContext(UserContext);
};

export default function AuthProvider({ children }) {
    const [isLoggedOut, setIsLoggedOut] = useState(true);

    return (
        <UserContext.Provider // Gunakan UserContext.Provider
            value={{ 
                isLoggedOut,
                setIsLoggedOut, // Menyediakan juga fungsi untuk memperbarui state
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
