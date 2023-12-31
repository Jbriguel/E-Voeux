export class voeuxData {
    constructor(id,
        prenom,
        imageIndex,
        contenu) {
        this.id = id;
        this.prenom = prenom;
        this.contenu = contenu;
        this.imageIndex = imageIndex;
    }
    toString() {
        return this.id + ', ' + this.imageIndex + ', ' + this.contenu + ', ' + this.prenom;
    }
    toFirestore() {
        return {
            id: this.id,
            prenom: this.prenom,
            contenu: this.contenu,
            imageIndex: this.imageIndex,
        };
    }
}
// Firestore data converter
export const voeuxDataConverter = {
    toFirestore: (voeuxData) => {
        return {
            id: voeuxData.id,
            prenom: voeuxData.prenom,
            contenu: voeuxData.contenu,
            imageIndex: voeuxData.imageIndex,
        };
    },
    fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new voeuxData(data.id, data.prenom, data.imageIndex, data.contenu);
    }
};
