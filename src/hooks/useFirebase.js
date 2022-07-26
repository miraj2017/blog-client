// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { useEffect, useState } from "react";
// import initializeFirebase from "../Authentication/Firebase/firebase.init";

// initializeFirebase();

// const useFirebase = () => {
//   const [user, setUser] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [authError, setAuthError] = useState("");

//   const googleProvider = new GoogleAuthProvider();
//   const auth = getAuth();

//   const signInUsingGoogle = (location, history) => {
//     setIsLoading(true);
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const user = result.user;

//         // const destination = location?.state?.from || "/home";
//         const destination = "/home";
//         history.replace(destination);
//         setAuthError("");
//       })
//       .catch((error) => {
//         setAuthError(error.message);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };
//   const logout = () => {
//     setIsLoading(true);
//     signOut(auth)
//       .then(() => {
//         setUser({});
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   // Observe User State

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser({});
//       }
//       setIsLoading(false);
//     });
//     return () => unsubscribe;
//   }, []);

//   return {
//     user,

//     signInUsingGoogle,
//     logout,
//     isLoading,
//     authError,
//   };
// };

// export default useFirebase;
