function checkArrowDownButton({
  goToPreviousPage,
  goToNextPage,
  numberOfPages,
  pageNumber,
}) {
  document.onkeydown = e => {
    if (e.key === 'ArrowLeft' && pageNumber > 0) {
      return goToPreviousPage();
    } else if (e.key === 'ArrowRight' && numberOfPages !== pageNumber) {
      return goToNextPage();
    }
    return;
  };
}

export { checkArrowDownButton };
