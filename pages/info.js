import Link from "next/link";
import Image from "next/image";
import Loading from "../components/loading";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";

export default function Info() {
	const [users, setUsers] = useState([]);
	const [slidesPerView, setSlidesPerView] = useState(3);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth <= 1024) {
				setSlidesPerView(1);
			} else {
				setSlidesPerView(3);
			}
		});
		setLoading(true);
		axios.get(`/api/users`)
			.then((data) => {
				setUsers(data.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, []);

	if (isLoading) {
		return <Loading></Loading>;
	}

	return (
		<div className="Info w-full h-full">
			
			<div className="text-5xl font-bold text-center mt-10">
				I NOSTRI EDUCATORI
			</div>
			{
				(!error) ? 
					<Swiper
						spaceBetween={50}
						slidesPerView={slidesPerView}
						centeredSlides={true}
						loop={true}
						className="w-2/3 lg:w-full"
					>
						{users.map((user, i) => (
							<SwiperSlide
								key={i}
								className="w-full lg:w-auto aspect-square relative"
							>
								<div className="user-card pr-5">
									<Image
										className="bg-image absolute top-0"
										src="/images/apple-bg.png"
										alt="logo"
										layout="fill"
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
					</Swiper> : 
					<div className="text-center italic mt-10">Educatori al momento non disponibili. Provare a ricaricare la pagina</div>
			}
		</div>
	);
}
