import {useEffect} from "react";

function useIntersectionObserver(observedClass, onEnter, onLeave) {
	useEffect(() => {

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) onEnter(entry);
				if (!entry.isIntersecting) onLeave(entry);
			})
		}, {});

		const titles = document.querySelectorAll(observedClass);
		titles.forEach((title) => {
			observer.observe(title);
		})
	}, [observedClass, onEnter, onLeave])
}

export default useIntersectionObserver;