import axios from "axios";

const baseUrl = "http://173.249.57.219:8086";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-access-token"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//formData options
const options = {
  headers: {
    "content-type": "multipart/form-data",
  },
};

const api = {
  // Pour gérer la connexion
  signin: (body) => {
    return axios.post(`${baseUrl}/api/auth/signin`, body);
  },

  // Pour gérer la déconnexion
  signout: (userId) => {
    return axios.post(`${baseUrl}/api/auth/signout`, userId);
  },

  // Pour récupérer la liste des users
  getuser: () => {
    return axios.get(`${baseUrl}/api/users`);
  },

  //pour récupérer les services

  getservice: () => {
    return axios.get(`${baseUrl}/api/services`)
  },

  // endpoint pour récupérer un service en fonction de son id

  getserviceid: (id) => {
    return axios.get(`${baseUrl}/api/services/${id}`)
  },

  //endpoint pour gerer l'inscription sur les formulaires de réservation si c'est un stand

  postuserstand: (body) => {
    return axios.post(`${baseUrl}/api/transactions`, body, options)
  },


  //endpoint pour gérer la liste des réservations
  getallreservation: () => {
    return axios.get(`${baseUrl}/api/transactions`)
  },

  //endpoint pour modifier une transation

  // updatepaiementid: (id, body) => {
  //   return axios.put(`${baseUrl}/api/paiements/${id}`, body)
  // },

  //endpoint pour creer un paiement

  createpaiement: (body) => {
    return axios.post(`${baseUrl}/api/paiements`, body)
  },



  //endpoint pour gérer la création de compte
  createuser: (body) => {
    return axios.post(`${baseUrl}/api/auth/signup/`, body)
  },

  //endpoint pour gérer la liste des comptes
  readalluser: () => {
    return axios.get(`${baseUrl}/api/users`)
  },


  //endpoint pour modifier les données de l'utilisateur sauf le mot de passe

  updateuser: (id, body) => {
    return axios.put(`${baseUrl}/api/update-user/${id}`, body)
  },

  //endpoint pour modifier le mot de passe

  updatepassword: (id, body) => {
    return axios.put(`${baseUrl}/api/update-password/${id}`, body)
  },

  //endpoint pour récupérer la liste des paiements

  readallpaiement: () => {
    return axios.get(`${baseUrl}/api/paiements/`)
  },

  //endpoint pour la liste des stuctures

  getstructure: () => {
    return axios.get(`${baseUrl}/api/structure`)
  },

  //endpoint pour mettre à jour un paiement

  updatepaiment: (id, body) => {
    return axios.put(`${baseUrl}/api/paiements/${id}`, body)
  },


  // endpoint pour supprimer un paiement

  deletepaiement: (id) => {
    return axios.delete(`${baseUrl}/api/paiements/${id}`)
  },


  // endpoint pour le mot de passe oublie

  motdepasseoublie: (body) => {
    return axios.post(`${baseUrl}/api/forgot-password`, body)
  },

  resetpassword: (body) => {
    return axios.post(`${baseUrl}/api/reset-password`, body)
  },

  // enpoint pour les notifications
  getnotification: () => {
    return axios.get(`${baseUrl}/api/notifications`)
  },

  // endpoint pour gérer les statistiques

  getstatistique: () => {
    return axios.get(`${baseUrl}/api/statistiques`)
  },

  getstatkit: () => {
    return axios.get(`${baseUrl}/api/statkits`)
  },

  //endpoint pour supprimer une transaction


  deletetransaction: (id) => {
    return axios.delete(`${baseUrl}/api/transactions/${id}`)
  },

  // endpoint pour la liste détente

  getdetente: () => {
    return axios.get(`${baseUrl}/api/detentes`)
  },

  // endpoint pour la liste des packs

  getpacks: () => {
    return axios.get(`${baseUrl}/api/packs`)
  },

  // endpoint pour créer des packs

  createpack: (body) => {
    return axios.post(`${baseUrl}/api/packs`, body)
  },

  // endpoint pour créer la detente

  createdetente: (body) => {
    return axios.post(`${baseUrl}/api/detentes`, body)
  },

  // endpoint pour supprimer une détente

  deletedetente: (id) => {
    return axios.delete(`${baseUrl}/api/detentes/${id}`)
  },
  // endpoint pour créer un  paiement détente

  createpaiementdetente: (body) => {
    return axios.post(`${baseUrl}/api/detentepaiements`, body)
  },

  //endpoint pour récupérer la liste des paiements de la détente

  readallpaiementDetente: () => {
    return axios.get(`${baseUrl}/api/detentepaiements`)
  },

  //endpoint pour supprimer un paiement de la détente

  deletepaiementDetente: (id) => {
    return axios.delete(`${baseUrl}/api/detentepaiements/${id}`)
  },


};



export default api;
