// import React, { useState, useRef } from "react";
// import { toPng } from "html-to-image";
// import { useRouter } from "next/router";
// import Head from "next/head";

// function CartPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const [imageUrl, setImageUrl] = useState("");
//   const ref = useRef(null);

//   const makeOgImage = () => {
//     if (ref.current === null) {
//       return;
//     }
//     toPng(ref.current, { cacheBust: true })
//       .then((dataUrl) => {
//         const link = document.createElement("a");
//         // link.download = 'speakerName.png'
//         link.href = dataUrl;

//         setImageUrl(link.href);
//         link.click();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <>
//       <Head>
//         <meta property="og:image" content={imageUrl} />
//       </Head>
//       <div ref={ref}>CartPage: {id}</div>
//       <button onClick={makeOgImage}>Share</button>
//     </>
//   );
// }

// export default CartPage;
