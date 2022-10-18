import Link from "next/link";
import Image from "next/image";
import Loading from "../components/loading"
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/parallax";

function About({ data }) {
	const [users, getUsers] = useState(data);

	if (!users) {
		<Loading></Loading>
	}

	return (
		<div className="About w-full h-full">
			<div className="text-5xl font-bold text-center my-10">I NOSTRI EDUCATORI</div>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				centeredSlides={true}
				onSlideChange={() => console.log('slide change')}
				onSwiper={() => console.log(users)}
				className="w-2/3"
			>
				{
					users.map((i, user) => (
						<SwiperSlide key={i + "slide"}>
							<div className="user-card border aspect-square relative">
								<img className="absolute" src="/images/apple-bg.png" alt="logo"/>
								<div className="user-card-img w-20 h-20 border rounded-full mx-auto my-5 bg-white">

								</div>
								<div>{user.Surname}</div>
							</div>
						</SwiperSlide>
					))
				}
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
