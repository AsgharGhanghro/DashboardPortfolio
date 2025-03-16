// // /* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// function CardRotate({ children, onSendToBack, sensitivity }) {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useTransform(y, [-100, 100], [60, -60]);
//   const rotateY = useTransform(x, [-100, 100], [-60, 60]);

//   function handleDragEnd(_, info) {
//     if (
//       Math.abs(info.offset.x) > sensitivity ||
//       Math.abs(info.offset.y) > sensitivity
//     ) {
//       onSendToBack();
//     } else {
//       x.set(0);
//       y.set(0);
//     }
//   }

//   return (
//     <motion.div
//       className="absolute cursor-grab"
//       style={{ x, y, rotateX, rotateY }}
//       drag
//       dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
//       dragElastic={0.6}
//       whileTap={{ cursor: "grabbing" }}
//       onDragEnd={handleDragEnd}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default function Stack({
//   randomRotation = false,
//   sensitivity = 200,
//   cardDimensions = {width: 300, height: 320 },
//   cardsData = [],
//   animationConfig = { stiffness: 260, damping: 20 },
//   sendToBackOnClick = false
// }) {
//   const [cards, setCards] = useState(
//     cardsData.length
//       ? cardsData
//       : [
//           { id: 1, img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D", link: "https://agency-lyart-five.vercel.app/" },
//           { id: 2, img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format", link: "https://agency-lyart-five.vercel.app/" },
//           { id: 3, img: "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww", link: "https://agency-lyart-five.vercel.app/" },
//           { id: 4, img: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2dyYW1taW5nfGVufDB8fDB8fHww", link: "https://agency-lyart-five.vercel.app/" },
//           { id: 5, img: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2dyYW1taW5nfGVufDB8fDB8fHww", link: "https://agency-lyart-five.vercel.app/"  },
//           { id: 6, img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww", link: "https://agency-lyart-five.vercel.app/"  },
//           { id: 7, img: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",link: "https://agency-lyart-five.vercel.app/" },
//         ]
//       );

//   const sendToBack = (id) => {
//     setCards((prev) => {
//       const newCards = [...prev];
//       const index = newCards.findIndex((card) => card.id === id);
//       const [card] = newCards.splice(index, 1);
//       newCards.unshift(card);
//       return newCards;
//     });
//   };

//   return (
//     <>
//       <div
//         className="relative ml-8 md:mx-auto mb-12 "
//         style={{
//           width: cardDimensions.width,
//           height: cardDimensions.height,
//           perspective: 2000,
//         }}
//       >
//         {cards.map((card, index) => {
//           const randomRotate = randomRotation
//             ? Math.random() * 10 - 5 // Random degree between -5 and 5
//             : 0;

//           return (
//             <CardRotate
//               key={card.id}
//               onSendToBack={() => sendToBack(card.id)}
//               sensitivity={sensitivity}
//             >
//               <motion.div
//                 className="rounded-2xl overflow-hidden border-4 border-white"
//                 onClick={() => sendToBackOnClick && sendToBack(card.id)}
//                 animate={{
//                   rotateZ: (cards.length - index - 1) * 4 + randomRotate,
//                   scale: 1 + index * 0.06 - cards.length * 0.06,
//                   transformOrigin: "90% 90%",
//                 }}
//                 initial={false}
//                 transition={{
//                   type: "spring",
//                   stiffness: animationConfig.stiffness,
//                   damping: animationConfig.damping,
//                 }}
//                 style={{
//                   width: cardDimensions.width,
//                   height: cardDimensions.height,
//                 }}
//               >
//                 <Link to={card.link}>
//                   <img
//                     src={card.img}
//                     alt={`card-${card.id}`}
//                     className="w-full h-full object-cover outline-none pointer-events-none"
//                   />
//                 </Link>
//               </motion.div>
//             </CardRotate>
//           );
//         })}
//       </div>
//     </>
//   );
// }

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 300, height: 320 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
}) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&auto=format&fit=crop&q=60", link: "https://agency-lyart-five.vercel.app/" },
          { id: 2, img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format", link: "https://agency-lyart-five.vercel.app/" },
          { id: 3, img: "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?w=600&auto=format&fit=crop&q=60", link: "https://agency-lyart-five.vercel.app/" },
          { id: 4, img: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=600&auto=format&fit=crop&q=60", link: "https://agency-lyart-five.vercel.app/" },
          
        ]
  );

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative flex justify-center items-center "
      style={{ perspective: 2000 }}
    >
      <div className="md:w-full w-48 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {cards.map((card, index) => {
          const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
          return (
            <CardRotate
              key={card.id}
              onSendToBack={() => sendToBack(card.id)}
              sensitivity={sensitivity}
            >
              <motion.div
                className="rounded-2xl overflow-hidden border-4 border-white shadow-lg"
                onClick={() => sendToBackOnClick && sendToBack(card.id)}
                animate={{
                  rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                  scale: 1 + index * 0.06 - cards.length * 0.06,
                  transformOrigin: "90% 90%",
                }}
                transition={{
                  type: "spring",
                  stiffness: animationConfig.stiffness,
                  damping: animationConfig.damping,
                }}
                style={{ width: "100%", height: "auto" }}
              >
                <Link to={card.link}>
                  <img
                    src={card.img}
                    alt={`card-${card.id}`}
                    className="w-full h-auto object-cover"
                  />
                </Link>
              </motion.div>
            </CardRotate>
          );
        })}
      </div>
    </div>
  );
}