const scrollToElement = (scrollName: string) => {
    const element = document.querySelector(scrollName);
    console.log('click')
    console.log(element)
    if (element) {
      console.log('scroll')
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  

export default scrollToElement;