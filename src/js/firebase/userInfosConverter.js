export class userInfos {
    constructor(ip,
        city,
        region,
        country) {
        this.ip = ip;
        this.city = city;
        this.region = region;
        this.country = country;
    }
    toString() {
        return this.ip + ', ' + this.city + ', ' + this.country + ', ' + this.region;
    }
    toFirestore() {
        return {
            ip: userInfos.ip,
            city: userInfos.city,
            region: userInfos.region,
            country: userInfos.country,
        };
    }
}
// Firestore data converter
export const userInfosConverter = {
    toFirestore: (userInfos) => {
        return {
            ip: userInfos.ip,
            city: userInfos.city,
            region: userInfos.region,
            country: userInfos.country,
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new userInfos(data.ip, data.city, data.region, data.country);
    }
};
