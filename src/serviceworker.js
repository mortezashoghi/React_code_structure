const sworeker = () => {
    //`${process.env.PUBLIC_URL}
    let sworkerUrl = "/serviceWker.js";
    navigator.serviceWorker.register(sworkerUrl).then((responce) => {});
};
export default sworeker;