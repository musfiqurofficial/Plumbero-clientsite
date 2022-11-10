import React from 'react';
import img1 from "../../../../assets/plumbero-img1.jpg";
import img2 from "../../../../assets/plumbero-img2.jpg";
import img3 from "../../../../assets/plumbero-img3.jpg";
import img4 from "../../../../assets/plumbero-img4.jpg";
import img5 from "../../../../assets/plumbero-img5.jpg";

const IntroductionArea = () => {

    return (
        <div className='w-10/12 mx-auto my-20'>
            <div className='lg:flex justify-between'>
                <div className='grid grid-cols-2 gap-4 w-11/12'>
                    <img className='w-full rounded-xl border-8 border-amber-300 top-0' src={img2} alt="" />
                    <img className='w-full rounded-xl border-8 border-amber-300 bottom-36' src={img1} alt="" />
                    <img className=' rounded-xl border-8 border-amber-300 top-20 left-24' src={img5} alt="" />
                    <img className=' rounded-xl border-8 border-amber-300 bottom-28 right-0 ' src={img3} alt="" />
                    <img className=' rounded-xl border-8 border-amber-300 -right-10' src={img4} alt="" />
                </div>
                <div>
                    <div className=' my-20 ml-10'>
                        <h6 className='lg:text-base lg:font-bold my-1'>INTRODUCTION OF US!</h6>
                        <h1 className='lg:text-5xl text-3xl font-bold my-2'>Know About Why We Are Best In Plumbing !</h1>
                        <p className='w-9/12 my-5'>Maxime aliquam deleniti venenatis deleniti. Adipisci maecenas officiis lorem adipisicing veritatis ut et! Dictumst, faucibus, accusamus scelerisque.</p>
                        <div className='px-10 '>
                            <div className='p-10 shadow-md rounded-lg'>
                                <ul>
                                    <li>
                                        Lusto tenetur temporibus repellendus aspernatur, blandit ullam cupidatat quisquam lacinia.
                                    </li>
                                    <li>
                                        Minima mattis laudantium nobis odit explicabo sapien nunc. Reprehenderit molestiae.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroductionArea;