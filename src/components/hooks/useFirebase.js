import { getAuth, sendEmailVerification, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAunthentication from "../../Firebase/firebase.initialize";

initializeAunthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const createNewAccount = (email, password, name, history, redirect_url) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user; console.log(user);
                // const newUser = { email, displayName: name };
                // setUser(newUser);
                setUserName(name);
                setError('');
                saveUser(email, name);// save user to db
                logOut();
                verifyEmail(history);
                /* if (user.email) {
                    history.push(redirect_url);
                } */
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const verifyEmail = (history) => {
        const actionCodeSettings = { url: `https://fashion-flip-4e5c4.web.app/login` }
        sendEmailVerification(auth.currentUser, actionCodeSettings)
            .then(() => {
                // Email verification sent!
                history.replace('/verifyPage');
                console.log(auth.currentUser);
            });
    }

    const processLogin = (email, password, history, redirect_url) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user; console.log(user);
                setUser(user);
                setError('');
                /* if (user.email) {
                    history.push(redirect_url);
                } */
                if (!user.emailVerified) {
                    logOut();
                    history.replace('/verifyPage');
                }
                else {
                    history.push(redirect_url);
                }
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                // Profile updated!
            }).catch((error) => {
                // An error occurred
            });
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            setError(error.message);
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        const url = `https://immense-crag-73109.herokuapp.com/users`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(() => { })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    useEffect(() => {
        fetch(`https://immense-crag-73109.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        admin,

        user,
        setUser,

        error,
        setError,

        isLoading,
        setIsLoading,

        createNewAccount,
        setUserName,
        processLogin,
        logOut
    }
}

export default useFirebase;