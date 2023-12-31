import { visiteurCollection, paysCollection, db, personnalVoeuxCollection } from "./firebase";
import { addDoc, setDoc, doc, getDocs, collection, query , getDoc} from "firebase/firestore";
import { ipSetSave, ipIsSave } from "../cookie/cookieManager";
import { getVisIpAddr } from "../functions/allFonctions";
import { userInfosConverter, userInfos } from "./userInfosConverter";
import { voeuxData, voeuxDataConverter } from "./voeuxConverter";

//Ajouter un document
// si le doc existe, mettre à jour
//avec comme docRef l'@ip
async function saveData_ToCollection(collectionName, value, idDoc, convertor) {
    // Set with userInfosConverter
    const ref = doc(db, collectionName, idDoc).withConverter(convertor);
    // await setDoc(doc(db, collectionName, idDoc), value, { merge: true });
    await setDoc(ref, value)
    return true;
}

async function UserInfos_existe(collectionRef, idDoc) {
    var dataList = [];
    // filtrer where id correspond
    const q = query(collection(db, collectionRef), where('ip', '==', idDoc))
    const querySnap = await getDocs(q);

    querySnap.forEach((doc) => {
        dataList.push(doc.data())
    });

    if (dataList.length > 0) {
        return true;
    }
    else {
        return false;
    }
}



export function saveUserProvide() {

    //Verifier si les infos ont déjà été sauvegarder
    // pour ipIsSave == true , c'est oui
    //Dans le cas contraire, faudra sauvegarder
    var isSave = ipIsSave();
    if (isSave == false) {
        getVisIpAddr().then(function (data) {
            console.log("donnees :", data)
            //   "ip": "",
            //   "city": "Bamako",
            //   "region": "Bamako",
            //   "country": "ML",
            if (data != null) {
                const userData = new userInfos(data.ip, data.city, data.region, data.country);
                // console.log("userdata =>",userData.toString());
                // Ajouter des infos dans la collections visiteurCollection
                saveData_ToCollection(visiteurCollection, userData, data.ip, userInfosConverter).then(function () { console.log('user saved'); });
                //marquer sauvegarde comme ok
                ipSetSave(true);
            }
        });
    } else {

        getVisIpAddr().then(function (data) {
            const userData = new userInfos(data.ip, data.city, data.region, data.country);
            // console.log("userdata =>",userData.toString());
            UserInfos_existe(visiteurCollection, data.ip).then(function (value) {
                if (value == false) {
                    //Ajouter des infos dans la collections visiteurCollection
                    saveData_ToCollection(visiteurCollection, userData, data.ip).then(function () { console.log('user saved'); });
                }

            });

        });

    }
}

//-------------------------------------------------------//
// ----------------------VOEUX PART----------------------//
async function getvoeux_existe(collectionRef, idvoeuxDoc) {
    var dataList = [];
    // filtrer where id correspond
    const q = query(collection(db, collectionRef), where('id', '==', idvoeuxDoc))
    const querySnap = await getDocs(q);

    querySnap.forEach((doc) => {
        dataList.push(doc.data()) 
        console.log("ici1 : ",doc.data());
    });

   
    if (dataList.length > 0) {
        return dataList[0];
    }
    else {
        return null;
    }
}
//get Un voeux

export async function getVoeuxFormOnline(idVoeux) {
    getVoeuxData(idVoeux);
    // getvoeux_existe(personnalVoeuxCollection, idVoeux)
    //     .then(function (value) {
    //         if (value != null) {
    //             console.log(value)
    //             return voeuxDataConverter.fromFirestore(value);
    //         } else {
    //             return null;
    //         }
    //     })
    //     .catch(function () {
    //         return null;
    //     })
}

//Get time for id voeux perso
export function printTime() {
    return   Date.now();
}

export async function saveVoeux(idVoeux,msgVoeux, prenom, imageIndex) {
   
    let isOk = false;
    const leVoeux = new voeuxData(idVoeux, prenom, imageIndex, msgVoeux);
    saveData_ToCollection(personnalVoeuxCollection, leVoeux, idVoeux, voeuxDataConverter)
        .then(function (e) {
            console.log('voeux saved');
            isOk = true;
        })
        .catch(function () {
            console.log('voeux no saved');
            isOk = false;
        }).finally(function () {
            if (isOk == true) {
                console.log('is ok');
                return idVoeux;
            }
            else {
                console.log('is no ok');
                return null;
            }
        });

}

export async function getVoeuxData(idVoeux) {
    console.log("id for doc : ",idVoeux)
    const docSnap = await getDoc(doc(db, personnalVoeuxCollection,idVoeux))

    if (docSnap.exists()) {
        console.log('Document  exist')
       // console.log(docSnap.data())
        return voeuxDataConverter.fromFirestore(docSnap);
    } else {
      console.log('Document does not exist')
      return null;
    }
}