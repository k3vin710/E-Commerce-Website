import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDHqPo4rhM67R5fjPKYaYeV4Gt70Noj0-s",
	authDomain: "crwn-db-bebd9.firebaseapp.com",
	databaseURL: "https://crwn-db-bebd9.firebaseio.com",
	projectId: "crwn-db-bebd9",
	storageBucket: "crwn-db-bebd9.appspot.com",
	messagingSenderId: "984432220541",
	appId: "1:984432220541:web:c8567c6c911920f0f91414",
	measurementId: "G-RN2H77Q31N",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
