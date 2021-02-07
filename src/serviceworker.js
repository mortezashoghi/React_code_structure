const sworeker = () => {
  // console.log(`${process.env.PUBLIC_URL}`);
  //`${process.env.PUBLIC_URL}
  let sworkerUrl = "/serviceWker.js";
  navigator.serviceWorker.register(sworkerUrl).then((responce) => {
    // console.log("respnd");
  });
};

export default sworeker;
