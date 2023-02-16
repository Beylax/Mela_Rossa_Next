import Link from "next/link";
import Image from "next/image";
import Loading from "../components/loading";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";

export default function Info() {
	const [users, setUsers] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
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
		<div className="Info w-full h-full overflow-x-hidden">
			
			<div className="text-5xl font-bold text-center mt-10">
				I NOSTRI EDUCATORI
			</div>
			{
				(!error) ? 
					<Swiper
						spaceBetween={50}
						slidesPerView={"auto"}
						centeredSlides={true}
						loop={true}
						className="w-2/3 lg:w-full"
					>
						{users.map((user, i) => (
							<SwiperSlide
								key={i}
								className="md:!w-1/2 lg:!w-1/4 xl:!w-1/6 aspect-square relative"
							>
								<div className="user-card pr-5">
									<Image
										className="bg-image absolute top-0"
										src="/images/apple-bg.png"
										alt="logo"
										layout="fill"
									/>
									<div className="user-card-img aspect-square border rounded-full mx-auto bg-white mt-10">
										{/* TODO Insert user image */}
									</div>
									<div className="text-xl mt-5 uppercase">{user.Surname}</div>
									<div className="text-l lg:my-5">
										{user.Firstname} {user.Lastname}
									</div>
									{/* <div>
										{user.Telephone}
									</div> */}
									{/* <div className="hidden lg:block w-5/6 mx-auto">
										{user.Description}
									</div> */}
								</div>
							</SwiperSlide>
						))}
					</Swiper> : 
					<div className="text-center italic mt-10">Educatori al momento non disponibili. Provare a ricaricare la pagina</div>
			}
		</div>
	);
}
