import { motion } from "framer-motion";
//Picture
import pic1 from "../../../assets/clubPic1.jpg"
import pic2 from "../../../assets/clubPic2.jpg"
import pic3 from "../../../assets/clubPic3.jpg"
import pic4 from "../../../assets/clubPic4.jpg"
import pic5 from "../../../assets/clubPic5.jpg"

export const Galerry = () => {

    const images = [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic1,
        pic2,
        pic3,
        pic4,
    ];



    return (
        <>
            {/* <h1 className="my-5 text-center text-3xl font-bold text-[#538083]">Gallery</h1> */}
            <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%" }} className="mt-10">
                <motion.div
                    style={{ display: "flex", gap: "1rem" }}
                    animate={{
                        x: ["0%", "-100%"], // Start from right to left
                    }}
                    transition={{
                        repeat: Infinity, // Continuous loop
                        duration: 20, // Adjust for speed
                        ease: "linear", // Smooth constant motion
                    }}
                >
                    {images.map((src, index) => (
                        <motion.img
                            key={index}
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            style={{
                                width: "250px",
                                height: "150px",
                                borderRadius: "10px",
                                objectFit: "cover",
                                filter: "brightness(0.8)", // Makes the image darker
                                transition: "filter 0.3s ease-in-out", // Smooth transition for hover effect
                            }}
                            whileHover={{
                                scale: 1.1, // Zoom effect on hover
                                filter: "brightness(1)", // Removes the dark effect on hover
                            }}
                        />
                    ))}
                </motion.div>
            </div>
            <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%" }} className="my-5">
                <motion.div
                    style={{ display: "flex", gap: "1rem" }}
                    animate={{
                        x: ["-100%", "0%"], // Start from right to left
                    }}
                    transition={{
                        repeat: Infinity, // Continuous loop
                        duration: 20, // Adjust for speed
                        ease: "linear", // Smooth constant motion
                    }}
                >
                    {images.map((src, index) => (
                        <motion.img
                            key={index}
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            style={{
                                width: "250px",
                                height: "150px",
                                borderRadius: "10px",
                                objectFit: "cover",
                                filter: "brightness(0.8)", // Makes the image darker
                                transition: "filter 0.3s ease-in-out", // Smooth transition for hover effect
                            }}
                            whileHover={{
                                scale: 1.1, // Zoom effect on hover
                                filter: "brightness(1)", // Removes the dark effect on hover
                            }}
                        />
                    ))}
                </motion.div>
            </div>
            <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%" }} className="mb-20">
                <motion.div
                    style={{ display: "flex", gap: "1rem" }}
                    animate={{
                        x: ["0%", "-100%"], // Start from right to left
                    }}
                    transition={{
                        repeat: Infinity, // Continuous loop
                        duration: 20, // Adjust for speed
                        ease: "linear", // Smooth constant motion
                    }}
                >
                    {images.map((src, index) => (
                        <motion.img
                            key={index}
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            style={{
                                width: "250px",
                                height: "150px",
                                borderRadius: "10px",
                                objectFit: "cover",
                                filter: "brightness(0.8)", // Makes the image darker
                                transition: "filter 0.3s ease-in-out", // Smooth transition for hover effect
                            }}
                            whileHover={{
                                scale: 1.1, // Zoom effect on hover
                                filter: "brightness(1)", // Removes the dark effect on hover
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </>
    )
}
