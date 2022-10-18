import Link from "next/link";
import Image from "next/image";
import Loading from "../components/loading";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function About({ data }) {
	const [users] = useState(data);
	const [slidesPerView, setSlidesPerView] = useState(3);

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerHeight <= 768) {
				setSlidesPerView(1);
			}
			else {
				setSlidesPerView(3);
			}
		});
	}, []);

	if (!users) {
		<Loading></Loading>;
	}

	return (
		<div className="About w-full h-full">
			<div className="text-5xl font-bold text-center mt-10 mb-20">
				I NOSTRI EDUCATORI
			</div>
			<Swiper
				spaceBetween={50}
				slidesPerView={slidesPerView}
				centeredSlides={true}
				onSlideChange={() => console.log("slide change")}
				className="w-2/3 overflow-visible"
			>
				{users.map((user, i) => (
					<SwiperSlide key={i} className="w-full md:w-auto">
						<div className="user-card aspect-square relative pr-5">
							<img
								className="absolute"
								src="/images/apple-bg.png"
								alt="logo"
							/>
							<div className="user-card-img w-20 h-20 border rounded-full mx-auto bg-white"></div>
							<div className="text-2xl mt-20">{user.Surname}</div>
							<div className="my-5">
								{user.Firstname} {user.Lastname}
							</div>
							<div className="w-5/6 mx-auto">
								{user.Description}
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

// This gets called on every request
export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(`${process.env.BASE_URL}/api/users`);
	const data = await res.json();

	// Pass data to the page via props
	return { props: { data } };
}

export default About;
