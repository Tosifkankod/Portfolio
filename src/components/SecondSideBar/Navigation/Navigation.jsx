import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Navigation.css';

const Navigation = () => {
    const naviItems = useRef([]);

    useEffect(() => {
        const buttons = naviItems.current;

        const handleMouseMove = (button, e) => {
            const buttonRect = button.getBoundingClientRect();
            const buttonX = buttonRect.left + buttonRect.width / 2;
            const buttonY = buttonRect.top + buttonRect.height / 2;

            const deltaX = (e.clientX - buttonX) / 10;
            const deltaY = (e.clientY - buttonY) / 10;

            gsap.to(button, {
                x: deltaX,
                y: deltaY,
                duration: 0.3,
                ease: "power3.out"
            });
        };

        const handleMouseLeave = (button) => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "bounce.out"
            });
        };

        buttons.forEach(button => {
            const onMouseMove = handleMouseMove.bind(null, button);
            const onMouseLeave = handleMouseLeave.bind(null, button);

            button.addEventListener('mousemove', onMouseMove);
            button.addEventListener('mouseleave', onMouseLeave);

            // Cleanup on unmount
            return () => {
                button.removeEventListener('mousemove', onMouseMove);
                button.removeEventListener('mouseleave', onMouseLeave);
            };
        });
    }, []);

    return (
        <div className='navigation'>
            <div className='name'>
                <h3 className='font-extrabold mt-2 text-5xl mb-6'>
                    Tosif Kankod
                </h3>
            </div>
            <ul className='flex flex-col items-start gap-5 text-white'> {/* Adjusted flex properties */}
                {['Home', 'Experience', 'Education', 'Projects', 'About'].map((item, index) => (
                    <li
                        key={index}
                        ref={el => naviItems.current[index] = el}
                        className='li-item text-4xl lg:text-5xl cursor-pointer'
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <div className='text-white mt-6 flex flex-col justify-between'>
                <div className='text-gray-400 mb-2'>
                    <p>socials</p>
                </div>
                <div className='flex justify-between mt-2'>
                    <span>Twitter</span>
                    <span>Instagram</span>
                    <span>Linkedin</span>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
