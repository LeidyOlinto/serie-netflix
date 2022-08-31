import app from './app.js'
import { getFirestore, collection, addDoc , getDocs} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellfireClube(subscription) {
    //salvando os dados
    const db = getFirestore(app)
    const serieNetflixCollection= collection(db, 'serie-netflix')
    //aqui retorna uma promise  addDoc
    const docRef = await addDoc(serieNetflixCollection, subscription)
    return docRef.id
}


export async function getHellfireClubSubscriptions() {
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'serie-netflix')
    const hellfireClubCollectionSnapshot= await getDocs(hellfireClubCollection)
    const subscriptions = hellfireClubCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}
