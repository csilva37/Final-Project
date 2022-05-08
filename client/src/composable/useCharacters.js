import { ref } from 'vue'
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
} from 'firebase/firestore'

import { db } from './useFirebase'
import useAuth from './useAuth'

const { user } = useAuth()

const charactersDND = ref([])

const useCharacters = () => {
    const charactersCollection = collection(db, 'characters')

    const charactersQuery = query(charactersCollection, orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(charactersQuery, (querySnapshot) => {
        charactersDND.value = []
        querySnapshot.forEach(doc => {
            charactersDND.value.push({id: doc.id, ...doc.data() })
        })
    })

    const sendCharacters = async characterDND => {
        await addDoc(charactersCollection, {
            Name: characterDND.Name,
            Race: characterDND.Race,
            Class: characterDND.Class,
            Strength: characterDND.Strength,
            Dexterity: characterDND.Dexterity,
            Constitution: characterDND.Constitution,
            Wisdom: characterDND.Wisdom,
            Intelligence: characterDND.Intelligence,
            Charisma: characterDND.Charisma,
            Alignment: characterDND.Alignment,
            Author: user.value,
            createdAt: new Date(),
        })
    }

    return { charactersDND, unsubscribe, sendCharacters}
}
export default useCharacters