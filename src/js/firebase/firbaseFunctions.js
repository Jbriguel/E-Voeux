import { visiteurCollection, paysCollection, db } from "./firebase";
import { addDoc, setDoc, doc, getDocs, collection, query } from "firebase/firestore";
import { ipSetSave, ipIsSave } from "../cookie/cookieManager";
import { getVisIpAddr } from "../functions/allFonctions";
import { userInfosConverter, userInfos } from "./userInfosConverter";


//Ajouter un document
// si le doc existe, mettre à jour
//avec comme docRef l'@ip
async function saveData_ToCollection(collectionName, value, idDoc) {
    // Set with userInfosConverter
    const ref = doc(db, collectionName, idDoc).withConverter(userInfosConverter);
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
                saveData_ToCollection(visiteurCollection, userData, data.ip).then(function () { console.log('user saved'); });
                //marquer sauvegarde comme ok
                ipSetSave(true);
            }
        });
    } else {
        UserInfos_existe().then(function (value) {
            if (value == false) {
                getVisIpAddr().then(function (data) {
                    const userData = new userInfos(data.ip, data.city, data.region, data.country);
                    // console.log("userdata =>",userData.toString());

                    //Ajouter des infos dans la collections visiteurCollection
                    saveData_ToCollection(visiteurCollection, userData, data.ip).then(function () { console.log('user saved'); });
                });
            }

        });
    }
}