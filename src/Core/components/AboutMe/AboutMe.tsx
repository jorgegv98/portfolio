import { useTranslation } from 'react-i18next';
import './AboutMe.css'
import {setEntryAnimationRight} from '../../../Utils/window.utils';
import { useEffect } from 'react';
export default function AboutMe() {
    const [t,i18n] = useTranslation("global");
    hoverImgEffect()
    useEffect(() => {
        setEntryAnimationRight(1);
        setEntryAnimationRight(2);
    }, [])
    return (
        <div id='about' className="w-full gap-y-10 flex gap-x-20 grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1">
            <div className="col-span-1 flex justify-center lg:justify-end items-end lg:w-full lg:h-full">
                <div className="lg:hidden md:hidden text-3xl text-center py-5 lg:text-start lg:p-0 font-bold color-primary hidden-right-2">{t("about.title")}</div>
                <img className="hidden md:flex lg:flex img-about-me deep-effect" src={process.env.PUBLIC_URL + '/imgs/jorge2.jpg'} />
            </div>
            <div className="col-span-1 w-full grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1">
                <div className='flex flex-col gap-y-10 lg:gap-5'>
                    <div className='flex justify-center lg:block'>
                        <div className="hidden md:flex lg:flex text-3xl text-center py-5 lg:text-start lg:p-0 font-bold color-primary hidden-right-2">{t("about.title")}</div>
                        <img className="lg:hidden md:hidden img-about-me deep-effect" src={process.env.PUBLIC_URL + '/imgs/jorge2.jpg'} />
                    </div>
                    <div className='inline-block text-1xl hidden-right-1 font-weight-500 subtitle-text text-center lg:text-start '>
                        <span>
                        {t("about.content")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function hoverImgEffect() {
    const imgIntro: any = document.querySelector('.img-about-me');
    if (imgIntro) {
        const imgHeight = imgIntro.clientHeight;
        const imgWidth = imgIntro.clientWidth;
        imgIntro.addEventListener('mousemove', (evt: any) => {
            const { layerX, layerY } = evt;
            const yRotation = ((layerX - imgWidth / 2) / imgWidth) * 40;
            const XRotation = ((layerY - imgHeight / 2) / imgHeight) * 40;
            const style = `
                            scale(1.1)
                            rotateX(${XRotation}deg)
                            rotateY(${yRotation}deg)`;
            imgIntro.style.transform = style;
        })

        imgIntro.addEventListener('mouseout', (evt: any) => {
            console.log('estoy fuera')
            imgIntro.style.transform = `
                            scale(1)
                            rotateX(0deg)
                            rotateY(0deg)`;
        })
    }
}