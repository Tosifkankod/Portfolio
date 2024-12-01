import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './MagneticButton.css';
import { Cross as HM } from 'hamburger-react';

const MagneticButton = ({ toggle, setToggle }) => {
    const magBtnRef = useRef(null);
    const ballRef = useRef(null);
    const magTxtWrapperRef = useRef(null);

    const handleOnClick = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        const magneticButton = magBtnRef.current;
        const magneticTextWrapper = magTxtWrapperRef.current;
        const ball = ballRef.current;

        const handleMouseMove = (e) => {
            const buttonRect = magneticButton.getBoundingClientRect();
            const buttonX = buttonRect.left + buttonRect.width / 2;
            const buttonY = buttonRect.top + buttonRect.height / 2;

            if (e.clientX >= buttonRect.left && e.clientX <= buttonRect.right &&
                e.clientY >= buttonRect.top && e.clientY <= buttonRect.bottom) {

                const deltaX = (e.clientX - buttonX) / 5;
                const deltaY = (e.clientY - buttonY) / 5;

                gsap.to(magneticButton, {
                    x: deltaX,
                    y: deltaY,
                    duration: 0.3,
                    ease: "power3.out"
                });

                gsap.to(magneticTextWrapper, {
                    x: deltaX * 1.5,
                    y: deltaY * 1.5,
                    duration: 0.3,
                    ease: "power3.out"
                });
            }
        };

        const handleMouseEnter = () => {
            gsap.to(ball, {
                bottom: '0%', // Move the ball to the center of the button
                scale: 1,
                duration: 0.5,
                ease: 'power3.out',
            });
        };

        const handleMouseLeave = () => {
            gsap.to([magneticButton, magneticTextWrapper], {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power3.out"
            });

            // Move ball up and reset its position after animation
            gsap.to(ball, {
                bottom: '150%', // Move the ball up out of view
                scale: 1,
                duration: 0.5,
                ease: 'power3.out',
                onComplete: () => {
                    gsap.set(ball, {
                        bottom: '-112%', // Position the ball below the button
                        scale: 0.5,
                    });
                },
            });
        };

        magneticButton.addEventListener('mousemove', handleMouseMove);
        magneticButton.addEventListener('mouseleave', handleMouseLeave);
        magneticButton.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            magneticButton.removeEventListener('mousemove', handleMouseMove);
            magneticButton.removeEventListener('mouseenter', handleMouseEnter);
            magneticButton.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <button
            id="magneticButton"
            ref={magBtnRef}
            onClick={handleOnClick}
            className="fixed right-4 overflow-hidden z-[99] top-4 w-[70px] h-[70px] md:w-[90px] md:h-[90px]  text-white bg-black rounded-full flex items-center justify-center"
        >

            <div
                ref={ballRef}
                className="absolute w-[100px] h-[100px] md:w-[100px] md:h-[100px] bg-gray-500 rounded-full"
                style={{ bottom: '-112%', transform: 'scale(0.5)' }}
            ></div>

            <div id="magneticTextWrapper" ref={magTxtWrapperRef} className="relative z-10">
                <HM size={28} toggled={toggle} toggle={setToggle} />
            </div>
        </button>
    );
};

export default MagneticButton;
