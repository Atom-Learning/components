---
slug: carousel
title: Carousel
links:
  viewSource: components/carousel
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      The Carousel component displays a series of slides that can be swiped
      between or selected directly via buttons


      The `Carousel` must contain a `Carousel.Slider` with nested `Carousel.Slide`s and optionally can include a `Carousel.Pagination` and `Carousel.ArrowPrevious` / `Carousel.ArrowNext` for navigation between slides. `Carousel.Slider`’s optional `overflow` prop will cause it to render all slides at once, allowing the user to drag them into view. The `aria-selected` attribute can be used as a CSS selector to style slides according to whether they are currently selected (see below).


      Note that `Carousel.Slide`s must receive an `index` prop in order to correctly apply styling based on whether they are selected and that `Carousel.Arrows` should be rendered inside a parent with `position: relative` in order to be positioned correctly.


      <CodeBlock live={true} preview={true} code={`<Carousel
        slideWidth={200}
        slideHeight={200}
        numSlides={3}
        css={{ position: 'relative' }}
      >
        <Carousel.ArrowPrevious css={{ position: 'absolute', left: '$2' }} />
        <Carousel.ArrowNext css={{ position: 'absolute', right: '$2' }} />


        <Carousel.Slider aria-label="Example carousel" css={{ mb: '$4' }}>
          <Carousel.Slide index={1} aria-label="Slide 1">
            <Box css={{ bg: '$primary800', size: 200 }} />
          </Carousel.Slide>
          <Carousel.Slide index={2} aria-label="Slide 2">
            <Box css={{ bg: '$primary800', size: 200 }} />
          </Carousel.Slide>
          <Carousel.Slide index={3} aria-label="Slide 3">
            <Box css={{ bg: '$primary800', size: 200 }} />
          </Carousel.Slide>
        </Carousel.Slider>

        <Carousel.Pagination css={{ mx: 'auto', width: 'max-content' }} />
      </Carousel>`} language={"tsx"} />


      ### useCarousel hook


      useCarousel hook exposes the Carousel context outside.


      [Documentation about the hook usage.](https://github.com/express-labs/pure-react-carousel#hooks-and-usecontext)


      <CodeBlock code={`const CarouselSliderImplementation = ({ children }) => {
        const carouselContext = useCarousel()
        const \[currentSlide, setCurrentSlide] = React.useState(
          carouselContext.state.currentSlide
        )

        React.useEffect(() => {
          function onChange() {
            setCurrentSlide(carouselContext.state.currentSlide)
          }
          carouselContext.subscribe(onChange)
          return () => carouselContext.unsubscribe(onChange)
        }, \[carouselContext])

        return (
          <>
            <div>Current slide: {currentSlide}</div>
            {children}
          </>
        )
      }`} language={"tsx"} />


      <CodeBlock code={`<Carousel
        slideWidth={200}
        slideHeight={200}
        numSlides={2}
        css={{ position: 'relative' }}
      >
        <Carousel.ArrowPrevious />
        <Carousel.ArrowNext />
        <CarouselSliderImplementation>
          <Carousel.Slider>
            // slides
          </Carousel.Slider>
        </CarouselSliderImplementation>
      </Carousel>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Carousel" />

      <ComponentProps component="Carousel.Slider" />

      <ComponentProps component="Carousel.Slide" />

      <ComponentProps component="Carousel.Pagination" />

      <ComponentProps component="Carousel.ArrowPrevious" />

      <ComponentProps component="Carousel.ArrowNext" />
parent: XPLFvowY8sBRhG2IUn5Zk
uuid: 1tFvJEHLzSO0EKyC-RGIM
nestedSlug:
  - components
  - media
  - carousel
---
