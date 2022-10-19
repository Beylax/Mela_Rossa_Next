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
			if (window.innerWidth <= 1024) {
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

	console.log(users);

	return (
		<div className="About w-full h-full">
			<div className="text-5xl font-bold text-center mt-10">
				I NOSTRI EDUCATORI
			</div>
			<Swiper
				spaceBetween={50}
				slidesPerView={slidesPerView}
				centeredSlides={true}
				loop={true}
				onSlideChange={() => console.log("slide change")}
				className="w-2/3 lg:w-full"
			>
				{users.map((user, i) => (
					<SwiperSlide key={i} className="w-full lg:w-auto aspect-square relative">
						<div className="user-card pr-5">
							<img
								className="absolute top-0"
								src="/images/apple-bg.png"
								alt="logo"
							/>
							<div className="user-card-img aspect-square border rounded-full mx-auto bg-white mt-10"></div>
							<div className="text-2xl mt-5">{user.Surname}</div>
							<div className="lg:my-5">
								{user.Firstname} {user.Lastname}
							</div>
							{/* <div>
								{user.Telephone}
							</div> */}
							<div className="hidden lg:block w-5/6 mx-auto">
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
	console.log(`${process.env.BASE_URL}/api/users`);
	// Fetch data from external API
	const res = await fetch(`${process.env.BASE_URL}/api/users`);
	const data = await res.json();

	// Pass data to the page via props
	return { props: { data } };
}

export default About;
