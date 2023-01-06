import { Link } from 'react-router-dom';

import { Saved } from '../components/Saved';
import { Applied } from '../components/Applied';

import { ReactComponent as Share } from '../images/share.svg';
import { ReactComponent as Arrow } from '../images/arrow.svg';
import { ReactComponent as PointContacts } from '../images/point-contacts.svg';
import { ReactComponent as PointMap } from '../images/point-map.svg';

export function DetailPage() {
    return (
        
        <div className='wrapper bg-white py-5 px-2 mx-auto '>
            <section className="max-w-[1370px] mx-auto flex justify-between lg:flex-col ">
                <div className="container max-w-[720px] ml-[7rem] my-3 lg:mx-auto">
                    <header className="border-b-2 flex justify-between mb-[2.4rem] m:flex-col m:border-none">
                        <h2 className="text-[#3A4562] text-3xl font-bold m:border-b-2 m:pb-2 m:text-[1.7rem]">
                            Job Details
                        </h2>
                        <ul className="flex text-[#3A4562] m:text-[#38415D]/50 text-lg m:pt-3 m:text-base">
                            <li className="flex">
                                <span className="pt-1">
                                    <Saved />
                                </span>
                                <p className="ml-4 xl:ml-2 cursor-pointer hover:text-blue-700">
                                    Save to my list
                                </p>
                            </li>
                            <li className="flex ml-8 xl:ml-4">
                                <span className="pt-1">
                                    <Share />
                                </span>
                                <p className="ml-4 xl:ml-2 cursor-pointer hover:text-blue-700">
                                    Share
                                </p>
                            </li>
                        </ul>
                    </header>
                    <span className="m:hidden">
                        <Applied />
                    </span>
                    <div className="relative">
                        <div className="flex justify-between 2xl:flex-col">
                            <p className="max-w-[496px] text-2xl text-[#3A4562] font-bold mb-2">
                                Arbeitsmediziner/-in / Betriebsmediziner/-in
                                (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für
                                die Weiterbildung zum Facharzt/ zur Fachärztin
                                für Arbeitsmedizin (m/w/d)
                            </p>
                            <div className="flex flex-col  2xl:items-end 2xl:pr-[3rem]">
                                <p className="font-bold text-[#3A4562] text-xl">
                                    € 54 000—60 000
                                </p>
                                <span className="text-[#3A4562] text-lg 2xl:-order-1">
                                    Brutto, per year
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-base mb-2 2xl:absolute 2xl:left-0 2xl:bottom-[1rem]">
                            Posted 2 days ago
                        </p>
                    </div>
                    <article className="text-[#3A4562] text-lg mb-8">
                        <p className="mb-8 font-roboto">
                            At WellStar, we all share common goals. That’s what
                            makes us so successful – and such an integral part
                            of our communities. We want the same things, for our
                            organization, for our patients, and for our
                            colleagues. As the most integrated healthcare
                            provider in Georgia, this means we pride ourselves
                            on investing in the communities that we serve. We
                            continue to provide innovative care models, focused
                            on improving quality and access to healthcare.
                        </p>
                        <h3 className="font-bold text-[#3A4562] text-xl mb-4">
                            Responsopilities
                        </h3>
                        <p className="mb-8 font-roboto">
                            Wellstar Medical Group, a physician-led
                            multi-specialty group in Atlanta, Georgia, is
                            currently recruiting for a BC/BE cardiothoracic
                            surgeon to join their existing cardiovascular
                            program. This is an opportunity to play a key role
                            on a multidisciplinary team of cardiologists and
                            surgeons.
                        </p>
                        <p className="mb-8 font-roboto">
                            The ideal candidate will have five or more years of
                            experience in cardiac surgery. This candidate should
                            be facile with off-pump revascularization, complex
                            aortic surgery, minimally invasive valve and valve
                            repair, transcatheter valve replacement, surgical
                            atrial fibrillation ablation, ventricular assist
                            device placement, and extra corporeal membrane
                            oxygenation.
                        </p>
                        <p className="mb-8 font-roboto">
                            Wellstar is one of the largest integrated healthcare
                            systems in the Southeast with 11 hospitals in
                            Atlanta metro region. With two open heart programs
                            at Kennestone Regional Medical Center and Atlanta
                            Medical Center, Wellstar cardiac surgeons perform
                            over 1200 cardiac procedures per year. The cardiac
                            service line is the only center in Georgia with the
                            Joint Commission’s Comprehensive Cardiac Center
                            certification.
                        </p>
                        <h3 className="font-bold text-[#3A4562] text-xl mb-4">
                            Compensation & Benefits:
                        </h3>
                        <p>
                            Our physicians enjoy a wide range of benefits,
                            including:
                        </p>
                        <ul className="list-square font-roboto lg:ml-4">
                            <li>
                                Very competitive compensation package with
                                bonuses
                            </li>
                            <li>Medical, Dental, and Vision Insurance</li>
                            <li>Occurrence-based Malpractice Coverage</li>
                            <li>
                                Short-term and Long-term Disability Insurance
                                <br /> and life insurance
                            </li>
                        </ul>
                    </article>
                    <span className="m:block m:text-center">
                        <Applied />
                    </span>
                    <h2 className="text-[#3A4562] text-3xl font-bold border-b-2 pb-2 mb-4 m:text-[1.7rem]   ">
                        Additional info
                    </h2>
                    <p className="text-[#3A4562] text-lg mb-2">
                        Employment type
                    </p>
                    <input
                        className=" border border-[#A1B1DB] py-3 px-10 bg-[#57699E]/30 rounded-lg divide-black  w-[14rem] text-base text-[#55699E] font-bold cursor-pointer hover:bg-[#008332]/30 hover:border-[#008332]/10 xl:max-w-[110px] xl:px-1 m:max-w-[120px] s:max-w-[90%] s:mb-4 s:mx-auto"
                        type="submit"
                        value="Full time"
                    />
                    <input
                        className=" border border-[#A1B1DB] py-3 px-10 mx-2 bg-[#55699E]/30 rounded-lg divide-black w-[14rem] text-base text-[#55699E] font-bold cursor-pointer hover:bg-[#008332]/30 hover:border-[#008332]/10 xl:max-w-[110px] xl:px-1 m:max-w-[120px] s:max-w-[90%] s:mb-4 s:mx-auto"
                        type="submit"
                        value="Part time"
                    />
                    <input
                        className="border border-[#A1B1DB] py-3 px-10 bg-[#55699E]/30 rounded-lg divide-black w-[14rem] mb-[1.4rem] text-base text-[#55699E] font-bold cursor-pointer hover:bg-[#008332]/30 hover:border-[#008332]/10 xl:max-w-[110px] xl:px-1 m:max-w-[120px] s:max-w-[90%] s:mb-4 s:mx-auto"
                        type="submit"
                        value="Temporary"
                    />
                    <p className="text-[#3A4562] text-lg mb-2">Benefits</p>
                    <input
                        className="border border-[#FFCF00] py-3 px-10 bg-[#FFCF00]/20 rounded-lg divide-black  w-[14rem] text-base text-[#988B49] font-bold cursor-pointer xl:w-[12rem] xl:px-1 m:w-[11rem] s:max-w-[90%] s:mb-4 s:mx-auto"
                        type="submit"
                        value="Flexible shedule"
                    />
                    <input
                        className="border border-[#FFCF00] py-3 px-10 mx-2 bg-[#FFCF00]/20 rounded-lg divide-black w-[14rem] text-base text-[#988B49] font-bold cursor-pointer mb-[5.4rem] xl:w-[12rem] xl:px-1 m:w-[11rem] s:max-w-[90%] s:mb-4 s:mx-auto"
                        type="submit"
                        value="Relocation assistance"
                    />
                    <h2 className="text-[#3A4562] text-3xl font-bold border-b-2 pb-2 mb-4 m:text-[1.7rem]">
                        Attached images
                    </h2>
                    <div className="flex flex-wrap gap-10 justify-center pb-[5.6rem] lg:pb-2 s:column s:my-0 s:mx-auto s:w-[90%] ">
                        <img
                            className="rounded-lg m:max-w-[170px] s:max-w-[100%]"
                            src="/images/image1.png"
                            alt="foto"
                        />
                        <img
                            className="rounded-lg mx-5 m:max-w-[170px]  s:max-w-[100%]"
                            src="/images/image2.png"
                            alt="foto"
                        />
                        <img
                            className="rounded-lg sm:hidden"
                            src="/images/image3.png"
                            alt="foto"
                        />
                    </div>
                </div>
                <div className="lg:mx-auto lg:my-2">
                    <aside className="overflow-hidden relative max-w-[402px] h-[27rem] bg-[#2A3047] text-white ml-[1rem] rounded-lg  before:contents-[''] before:max-w-[17rem] before:h-[17rem] before:bg-[#202336] before:rounded-full before:absolute before:left-[-90px] before:top-[-10px]">
                        <div className="px-[3.9rem] pt-8 pb-3 relative s:px-[1.9rem] s:pb-8 s:text-center">
                            <p className="pb-3  text-xl font-bold">
                                Department name.
                                <br />
                                University Hospital Giessen.
                            </p>
                            <a href="/">
                                <span className="absolute s:left-8">
                                    <PointContacts />
                                </span>
                                <p className="ml-4">
                                    AKH Wien, 1090 Wien, Währinger
                                </p>

                                <p>Gürtel 18-20</p>
                            </a>
                            <a
                                className="block"
                                href="tel:+43014040012090"
                            >
                                +43 (01) 40400-12090
                            </a>
                            <a
                                className=""
                                href="mailto:post_akh_diz@akhwien.at"
                            >
                                post_akh_diz@akhwien.at
                            </a>
                        </div>

                        <map
                            className="max-w-[402px] relative"
                            name="map"
                        >
                            <PointMap className="absolute left-[80px] top-[50px]" />
                            <img
                                src="/images/Map.png"
                                alt="map"
                            />
                        </map>
                    </aside>
                </div>
            </section>
            <footer className="max-w-[1370px] mx-auto m:hidden">
                <Link to="/">
                    <button className="bg-gray-300 px-5 py-4 rounded-lg text-[#384564] block ml-[1rem]">
                        <p className="flex  text-xs font-semibold">
                            <Arrow className="mr-3" />
                            RETURN TO JOB BOARD
                        </p>
                    </button>
                </Link>
            </footer>
        </div>
    );
}
