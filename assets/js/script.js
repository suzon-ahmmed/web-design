document.addEventListener("DOMContentLoaded", function () {
  gsap.set(".loader-img", { y: 500 });
  gsap.set(".loader-imgs", { x: 500 });
  gsap.set(".nav-item", { y: 25, opacity: 0 });
  gsap.set("h1", { y: 200 });

  const t1 = gsap.timeline({ delay: 1 });

  t1.to(".loader-img", {
    y: 0,
    duration: 1.5,
    stagger: 0.1,
    ease: "power3.inOut",
  })
    .to(
      ".loader-imgs",
      {
        x: 0,
        duration: 2.5,
        ease: "power3.inout",
      },
      "-=2.25"
    )
    .to(
      ".loader-img:not(#loader-logo)",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      },
      "-=1"
    )
    .to(
      ".loader",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.inOut",
      },
      "-=0.5"
    )
    .to(".nav-item, h1", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: "power3.inOut",
    });
});
