// Modal Action Constants
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

// Login Action Constants
// export const IS_LOADING = "IS_LOADING";
// export const LOGIN_DATA = "LOGIN_DATA";

// Modal Action Creators
export function openModal() {
  return {
    type: OPEN_MODAL
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}

// Login Actions Creators
// export function handleLoading() {
//   return {
//     type: IS_LOADING
//   };
// }

// export function handleLoginData({ email, password } = {}) {
//   return {
//     type: LOGIN_DATA,
//     data: {
//       email,
//       password
//     }
//   };
// }
