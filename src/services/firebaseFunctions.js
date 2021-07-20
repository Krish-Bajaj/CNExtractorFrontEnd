import { auth } from './firebaseConfig'

// Different methods
// 1) Creating a user
export const createUser = (email, password) => {
	auth.createUserWithEmailAndPassword(email, password)
		.then(userCredential => {
			// Signed in
			var user = userCredential.user
			return user
			// ...
		})
		.catch(error => {
			var errorCode = error.code
			var errorMessage = error.message
			console.log({ errorCode, errorMessage })
			// ..
		})
}

// 2) Status of the app (checks whether there is a user logged in or not)
export const getStatus = () => {
	auth.onAuthStateChanged(user => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			var uid = user.uid
            console.log(uid)
			// ...
		} else {
            console.log("Signed out!")
			// User is signed out
			// ...
		}
	})
}

// 3) Logout a user from the app