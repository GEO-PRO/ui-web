const BASE_URL = "http://localhost:3000"
// const API_URL = "http://localhost:3001"
const API_URL = "http://210.245.96.134:3001"

const scrollTop = () => {
    window.scrollTo(0, 500);
    // window.scrollTo({ behavior: "smooth", top: "0px" });
}

const getNotFound = (dataLength) => {
    if (dataLength > 0) {
        return false
    } else {
        return true
    }
}

const convertStrArr = (input) => {
    return input ? input.split(', ') : ["08-04-2023Hinh-nen-iMac-dep.jpg"]
}

const convertTime = (time) => {
    const date = new Date(time);
    // Lấy các thành phần của ngày và giờ
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const second = date.getUTCSeconds();
    const millisecond = date.getUTCMilliseconds();
    // Định dạng lại chuỗi theo định dạng mong muốn
    const outputDate = `${day}/${month}/${year}`  /* ${hour}:${minute}:${second} */;
    return outputDate;
}

export { BASE_URL, API_URL, scrollTop, getNotFound, convertTime, convertStrArr }