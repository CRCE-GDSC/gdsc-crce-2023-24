import { db } from '@lib/firebase' // import your Firebase instance
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore'

const getTopUsers = async () => {
  const usersRef = collection(db, 'users')
  const q = query(usersRef, orderBy('tags', 'desc'), limit(10))
  const snapshot = await getDocs(q)
  const topUsers = snapshot.docs.map((doc) => ({
    userName: doc.data().userName,
    tags: doc.data().tags,
  }))
  return topUsers
}

export default getTopUsers
