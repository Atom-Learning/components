---
title: Atom's Design System
tabs:
  - content: "<Cards showSearch={true} showTagsFilter={true}
      items={[{\"description\":\"An accordion vertically stacked group of
      interactive headings that reveal an associated section of content when
      clicked\",\"heading\":\"Accordion\",\"link\":{\"href\":\"/components/layo\
      ut/accordion\"},\"tags\":[\"Layout/Structure\"],\"image\":\"/assets/image\
      s/accordion.svg\"},{\"description\":\"An accessible interactive wrapper
      around Icon to trigger an action behaving just like
      buttons.\",\"heading\":\"Action
      icon\",\"tags\":[\"Actions\",\"Navigation\"],\"link\":{\"href\":\"/compon\
      ents/navigation/action-icon\"},\"image\":\"/assets/images/action-icon.svg\
      \"},{\"description\":\"A modal dialog that interrupts the user with
      important content and expects a response.\",\"heading\":\"Alert
      dialog\",\"tags\":[\"Feedback\",\"Overlays\"],\"link\":{\"href\":\"/compo\
      nents/feedback/alert-dialog\"},\"image\":\"/assets/images/alert-dialog.svg\
      \"},{\"heading\":\"Avatar\",\"description\":\"An avatar is a component
      that offers a visual representation of a user or entity. It helps to
      quickly identify users or
      objects.\",\"link\":{\"href\":\"/components/media/avatar\"},\"tags\":[\"M\
      edia\",\"Actions\",\"Images and
      icons\"],\"image\":\"/assets/images/avatar.svg\"},{\"heading\":\"Badge\",\
      \"link\":{\"href\":\"/components/feedback/badge\"},\"description\":\"Badg\
      es are visual indicators for labels, useful to emphasize information to
      the user. Works best with single-word
      values.\",\"tags\":[\"Feedback\"],\"image\":\"/assets/images/badge.svg\"}\
      ,{\"heading\":\"Box\",\"description\":\"Box is our most fundamental layout
      component, an abstraction over the div
      element.\",\"tags\":[\"Layout/Structure\"],\"link\":{\"href\":\"/componen\
      ts/layout/box\"},\"image\":\"/assets/images/box.svg\"},{\"description\":\
      \"Buttons trigger an action such as submitting a form or showing/hiding an
      interface
      component.\",\"heading\":\"Button\",\"link\":{\"href\":\"/components/navi\
      gation/button\"},\"tags\":[\"Actions\",\"Navigation\"],\"image\":\"/asset\
      s/images/button.svg\"},{\"link\":{\"href\":\"/components/media/carousel\"\
      },\"description\":\"The Carousel component displays a series of slides
      that can be swiped between or selected directly via
      buttons\",\"heading\":\"Carousel\",\"tags\":[\"Media\",\"Images and
      icons\"],\"image\":\"/assets/images/carousel.svg\"},{\"heading\":\"Checkb\
      ox field\",\"description\":\"A toggle input for choosing from predefined
      options.\",\"link\":{\"href\":\"/components/form/fields/checkbox-field\"},\
      \"image\":\"/assets/images/checkbox-field.svg\",\"tags\":[\"Inputs\"]},{\
      \"heading\":\"Chip\",\"description\":\"A component in the shape of a pill
      providing visual cues to prompt users to enter information or filter
      content.\",\"link\":{\"href\":\"/components/feedback/chip\"},\"tags\":[\"\
      Inputs\",\"Filter\"],\"image\":\"/assets/images/chips.svg\"},{\"descripti\
      on\":\"Combobox combines a text input with a list of suggested
      values.\",\"heading\":\"Combobox\",\"link\":{\"href\":\"/components/form/\
      primitives/combobox\"},\"tags\":[\"Inputs\"],\"image\":\"/assets/images/c\
      ombobox.svg\"},{\"description\":\"Displays tabular data with features such
      as sorting and
      pagination.\",\"heading\":\"Table\",\"image\":\"/assets/images/datatable.\
      svg\",\"tags\":[\"List and
      tables\",\"Layout/Structure\"],\"link\":{\"href\":\"/components/content/t\
      able\"}},{\"description\":\"A form component that provides a styled date
      selector.\",\"heading\":\"Date input
      field\",\"link\":{\"href\":\"/components/form/fields/date-field\"},\"tags\
      \":[\"Inputs\"],\"image\":\"/assets/images/date-field.svg\"},{\"descripti\
      on\":\"The Dialog component renders its children inside a modal and puts a
      dimmer over the rest of the
      screen.\",\"heading\":\"Dialog\",\"link\":{\"href\":\"/components/surface\
      s/dialog\"},\"tags\":[\"Overlays\",\"Layout/Structure\"],\"image\":\"/ass\
      ets/images/dialog.svg\"},{\"description\":\"Use Divider to render a
      horizontal or vertical line that will extend to the parent node's
      width/height.\",\"heading\":\"Divider\",\"image\":\"/assets/images/divide\
      r.svg\",\"link\":{\"href\":\"/components/content/divider\"},\"tags\":[\"L\
      ayout/Structure\"]},{\"description\":\"A menu in which options are hidden
      by default but can be shown by interacting with a button; it is not a form
      input.\",\"heading\":\"Dropdown
      menu\",\"image\":\"/assets/images/dropdown-menu-_new-⚠️not.coded⚠️.svg\",\
      \"tags\":[\"Actions\",\"Inputs\"],\"link\":{\"href\":\"/components/surfac\
      es/dropdown-menu\"}},{\"description\":\"Empty states are messages that
      provide an explanation of an interface in absence of
      content.\",\"heading\":\"Empty
      state\",\"link\":{\"href\":\"/components/feedback/empty-state\"},\"tags\"\
      :[\"Feedback\"],\"image\":\"/assets/images/empty-state.svg\"},{\"heading\
      \":\"File input\",\"description\":\"An input that allows users to upload a
      file from their
      device.\",\"tags\":[\"Inputs\"],\"link\":{\"href\":\"/components/form/pri\
      mitives/file-input\"},\"image\":\"/assets/images/file-input.svg\"},{\"ima\
      ge\":\"/assets/images/flex.svg\",\"heading\":\"Flex\",\"description\":\"T\
      he Flex component is a light abstraction over Box that sets its rendering
      context to
      flex.\",\"link\":{\"href\":\"/components/layout/flex\"},\"tags\":[\"Layou\
      t/Structure\"]},{\"description\":\"The Grid component implements a simple
      CSS grid with auto-fit
      columns.\",\"heading\":\"Grid\",\"tags\":[\"Layout/Structure\"],\"image\":\
      \"/assets/images/grid.svg\",\"link\":{\"href\":\"/components/layout/grid\
      \"}},{\"description\":\"Use Heading to define a semantically relevant
      title to a component, section, or
      page.\",\"heading\":\"Heading\",\"link\":{\"href\":\"/components/content/\
      heading\"},\"image\":\"/assets/images/heading.svg\",\"tags\":[\"Titles and
      text\"]},{\"image\":\"/assets/images/icon.svg\",\"description\":\"A
      standardized way to render icons, ensuring that only the icons you use are
      included in your
      output.\",\"heading\":\"Icon\",\"link\":{\"href\":\"/components/content/i\
      con\"},\"tags\":[\"Images and icons\",\"Media\"]},{\"description\":\"An
      element for embedding
      images.\",\"heading\":\"Image\",\"link\":{\"href\":\"/components/media/im\
      age\"},\"tags\":[\"Media\",\"Images and
      icons\"],\"image\":\"/assets/images/image.svg\"},{\"image\":\"/assets/ima\
      ges/inline-messages.svg\",\"heading\":\"Inline
      message\",\"description\":\"An inline feedback message in the form of
      simple text that informs the user of relevant information, revealed in
      context.\",\"link\":{\"href\":\"/components/feedback/inline-message\"},\"\
      tags\":[\"Feedback\"]},{\"image\":\"/assets/images/input-field.svg\",\"he\
      ading\":\"Input field\",\"description\":\"A form control that accepts a
      single line of text and
      numbers.\",\"tags\":[\"Inputs\"],\"link\":{\"href\":\"/components/form/fi\
      elds/input-field\"}},{\"heading\":\"Label\",\"description\":\"A text label
      for form
      inputs.\",\"link\":{\"href\":\"/components/form/primitives/label\"},\"tags\
      \":[\"Inputs\"],\"image\":\"/assets/images/label.svg\"},{\"heading\":\"Li\
      nk\",\"description\":\"A link is a reference to a resource. This can be
      external or
      internal.\",\"tags\":[\"Actions\",\"Navigation\"],\"link\":{\"href\":\"/c\
      omponents/navigation/link\"},\"image\":\"/assets/images/link.svg\"},{\"he\
      ading\":\"List\",\"description\":\"Lists are used for grouping a
      collection of related items. There are unordered and ordered
      lists.\",\"tags\":[\"List and
      tables\"],\"link\":{\"href\":\"/components/content/list\"},\"image\":\"/a\
      ssets/images/list.svg\"},{\"description\":\"A visual indicator that a
      process is happening in the
      background.\",\"heading\":\"Loader\",\"link\":{\"href\":\"/components/fee\
      dback/loader\"},\"tags\":[\"Feedback\"],\"image\":\"/assets/images/loader\
      .svg\"},{\"description\":\"MarkdownContent will transform a Markdown
      string into Atom Learning design system
      components.\",\"heading\":\"Markdown
      content\",\"image\":\"/assets/images/markdown.svg\",\"link\":{\"href\":\"\
      /components/content/markdown-content\"},\"tags\":[\"Layout/Structure\"]},{\
      \"heading\":\"Navigation menu\",\"description\":\"NavigationMenu exports
      components that combine to form a container for navigation
      links.\",\"tags\":[\"Navigation\"],\"link\":{\"href\":\"/components/navig\
      ation/navigation-menu\"},\"image\":\"/assets/images/navigation-menu.svg\"\
      },{\"heading\":\"Notification badge\",\"description\":\"A small label that
      wraps content and displays a numeric
      notification.\",\"link\":{\"href\":\"/components/feedback/notification-ba\
      dge\"},\"tags\":[\"Feedback\"],\"image\":\"/assets/images/notification-ba\
      dge.svg\"},{\"image\":\"/assets/images/number-input-field.svg\",\"heading\
      \":\"Number input field\",\"description\":\"An Input control for editing a
      numeric/quantity value with increment and decrement buttons next to
      it.\",\"link\":{\"href\":\"/components/form/fields/number-input-field\"},\
      \"tags\":[\"Inputs\"]},{\"image\":\"/assets/images/pagination.svg\",\"hea\
      ding\":\"Pagination\",\"description\":\"A component used whenever a user
      needs to navigate through sets of data that are too long to fit on one
      page.
      \",\"link\":{\"href\":\"/components/navigation/pagination\"},\"tags\":[\"\
      Navigation\",\"List and tables\"]},{\"description\":\"An input for
      passwords with visibility toggle functionality.\",\"heading\":\"Password
      field\",\"link\":{\"href\":\"/components/form/fields/password-field\"},\"\
      tags\":[\"Inputs\"],\"image\":\"/assets/images/password-field.svg\"},{\"i\
      mage\":\"/assets/images/popover.svg\",\"description\":\"The Popover
      component displays floating informative and actionable content in relation
      to a
      target.\",\"heading\":\"Popover\",\"link\":{\"href\":\"/components/surfac\
      es/popover\"},\"tags\":[\"Overlays\",\"Layout/Structure\"]},{\"image\":\"\
      /assets/images/progress-bar.svg\",\"link\":{\"href\":\"/components/feedba\
      ck/progress-bar\"},\"heading\":\"Progress bar\",\"description\":\"A
      horizontal bar indicating the current completion status of a task, updated
      as the task
      progresses.\",\"tags\":[\"Feedback\"]},{\"image\":\"/assets/images/radio-\
      button-field.svg\",\"heading\":\"Radio button
      field\",\"description\":\"Radio buttons allow a user to select a single
      option from a list of predefined
      options.\",\"tags\":[\"Inputs\"],\"link\":{\"href\":\"/components/form/fi\
      elds/radio-button-field\"}},{\"image\":\"/assets/images/radio-card.svg\",\
      \"heading\":\"Radio card\",\"description\":\"A Radio Button that enables
      extra emphasis and descriptive
      capability.\",\"link\":{\"href\":\"/components/form/primitives/radio-card\
      \"},\"tags\":[\"Inputs\"]},{\"image\":\"/assets/images/search-field.svg\",\
      \"heading\":\"Search field\",\"description\":\"Search inputs allow users
      to find content by entering a search
      term.\",\"link\":{\"href\":\"/components/form/fields/search-field\"},\"ta\
      gs\":[\"Inputs\",\"Filter\"]},{\"image\":\"/assets/images/select-field.svg\
      \",\"description\":\"A form input used for selecting a value. It shows a
      list of predefined options for the user to choose
      from.\",\"heading\":\"Select
      field\",\"link\":{\"href\":\"/components/form/fields/select-field\"},\"ta\
      gs\":[\"Inputs\"]},{\"heading\":\"Section message\",\"description\":\"A
      contextual feedback message displayed to inform the user in a particular
      section of the
      page.\",\"link\":{\"href\":\"/components/feedback/section-message\"},\"ta\
      gs\":[\"Feedback\"],\"image\":\"/assets/images/section-message.svg\"},{\"\
      image\":\"/assets/images/drawer.svg\",\"heading\":\"Drawer\",\"link\":{\"\
      href\":\"components/surfaces/drawer\"},\"description\":\"A side panel to
      navigate the content of a product. Appears overlaid on top of a page and
      when triggered by the hamburguer
      menu.\",\"tags\":[\"Navigation\",\"Layout/Structure\"]},{\"description\":\
      \"A form control for choosing a value within a preset range of
      values.\",\"heading\":\"Slider
      field\",\"image\":\"/assets/images/slider-field.svg\",\"link\":{\"href\":\
      \"/components/form/fields/slider-field\"},\"tags\":[\"Inputs\"]},{\"descr\
      iption\":\"Stack is a layout component that provides an abstraction over
      the flexbox gap
      property\",\"heading\":\"Stack\",\"image\":\"/assets/images/stack.svg\",\
      \"link\":{\"href\":\"/components/layout/stack\"},\"tags\":[\"Layout/Struc\
      ture\"]},{\"image\":\"/assets/images/stack-content.svg\",\"heading\":\"St\
      ack content\",\"description\":\"A layout component to provide internal
      spacing between content
      components.\",\"link\":{\"href\":\"/components/layout/stack-content\"},\"\
      tags\":[\"Layout/Structure\"]},{\"description\":\"Component to indicate
      progress during more than one-step
      processes.\",\"heading\":\"Stepper\",\"image\":\"/assets/images/stepper.s\
      vg\",\"link\":{\"href\":\"/components/navigation/stepper\"},\"tags\":[\"N\
      avigation\",\"Feedback\"]},{\"image\":\"/assets/images/switch.svg\",\"hea\
      ding\":\"Switch\",\"description\":\"A control used to switch between two
      states: often on or
      off.\",\"link\":{\"href\":\"/components/form/primitives/switch\"},\"tags\
      \":[\"Inputs\"]},{\"image\":\"/assets/images/tab.svg\",\"heading\":\"Tabs\
      \",\"link\":{\"href\":\"/components/layout/tabs\"},\"description\":\"Tabs
      are a component to navigate between different sections of content that are
      displayed one at a
      time.\",\"tags\":[\"Navigation\",\"Filter\"]},{\"image\":\"/assets/images\
      /text.svg\",\"heading\":\"Text\",\"description\":\"Text is our basic
      component for rendering text, use it for any non-heading
      text.\",\"link\":{\"href\":\"/components/content/text\"},\"tags\":[\"Titl\
      es and text\"]},{\"description\":\"A form control for editing multi-line
      text.\",\"heading\":\"Textarea
      field\",\"link\":{\"href\":\"/components/form/fields/textarea-field\"},\"\
      tags\":[\"Inputs\"],\"image\":\"/assets/images/text-area-field.svg\"},{\"\
      image\":\"/assets/images/toast.svg\",\"heading\":\"Toast\",\"description\
      \":\"A floating alert which appears in a layer above other content
      providing immediate feedback. Disappear automatically or can be dismissed
      by the
      user.\",\"link\":{\"href\":\"/components/feedback/toast\"},\"tags\":[\"Fe\
      edback\",\"Overlays\"]},{\"description\":\"A component that lets users
      toggle between a group of options. It can be used as single or
      multi-select.\",\"heading\":\"Toggle
      group\",\"image\":\"/assets/images/toggle-group.svg\",\"link\":{\"href\":\
      \"/components/content/toggle-group\"},\"tags\":[\"Actions\",\"Filter\"]},{\
      \"image\":\"/assets/images/tooltip.svg\",\"link\":{\"href\":\"/components\
      /surfaces/tooltip\"},\"description\":\"Tooltips display a description or
      extra information about an element, usually on hover, but can also be on
      click or
      tap.\",\"heading\":\"Tooltip\",\"tags\":[\"Feedback\"]},{\"image\":\"/ass\
      ets/images/topbar.svg\",\"heading\":\"Topbar\",\"description\":\"The
      topbar allows users to search, access menus, and navigate. By default it’s
      fixed at the top of the
      interface.\",\"tags\":[\"Navigation\",\"Layout/Structure\"],\"link\":{\"h\
      ref\":\"/components/surfaces/top-bar\"}},{\"image\":\"/assets/images/vide\
      o.svg\",\"heading\":\"Video\",\"description\":\"Video component supports
      playing Vimeo hosted
      videos.\",\"link\":{\"href\":\"/components/media/video\"},\"tags\":[\"Med\
      ia\"]},{\"heading\":\"Banner Regular\",\"description\":\"A container with
      a short message, a call-to-action, and an image, used to push the user
      towards an
      action.\",\"link\":{\"href\":\"/components/content/banner-regular\"},\"ta\
      gs\":[\"Feedback\",\"Layout/Structure\",\"Actions\"],\"image\":\"/assets/\
      images/banner-thumbnail.svg\"},{\"heading\":\"Tile\",\"description\":\"Ti\
      le is a fundamental layout component used as a generic container to build
      the base of panels, cards, lists and other content
      components.\",\"link\":{\"href\":\"/components/surfaces/tile\"},\"tags\":[\
      \"Layout/Structure\",\"Navigation\",\"Inputs\"],\"image\":\"/assets/image\
      s/tile-thumbnail.svg\"},{\"heading\":\"Create Password
      Input\",\"description\":\"An input that allows users to privately enter
      their password when creating new
      ones.\",\"link\":{\"href\":\"/components/form/fields/create-password-field\
      \"},\"tags\":[\"Inputs\"],\"image\":\"/assets/images/create-password-inpu\
      t.svg\"},{\"image\":\"/assets/images/datatable.svg\",\"heading\":\"Datata\
      ble\",\"description\":\"Data Table provides complex features for tables,
      like sorting and
      pagination.\",\"link\":{\"href\":\"/components/content/data-table?tab=code\
      \"},\"tags\":[\"List and tables\"]},{\"heading\":\"Banner
      Slim\",\"description\":\"Slim variant. A container with a short message, a
      call-to-action, and an image, used to push the user towards an
      action.\",\"link\":{\"href\":\"/components/content/banner-slim\"},\"tags\
      \":[\"Feedback\",\"Layout/Structure\",\"Actions\"],\"image\":\"/assets/im\
      ages/banner-slim.svg\"},{\"image\":\"/assets/images/chip-dismissible-grou\
      p.svg\",\"heading\":\"Chip dismissible group\",\"description\":\"A
      dismissible component in the shape of a pill providing visual cues to
      prompt users to enter information or filter
      content.\",\"link\":{\"href\":\"/components/feedback/chip-dismissible-gro\
      up?tab=code\"},\"tags\":[\"Inputs\",\"Filter\"]},{\"image\":\"/assets/ima\
      ges/chip-toggle-group.svg\",\"heading\":\"Chip toggle
      group\",\"description\":\"A selectable toggle component in the shape of a
      pill providing visual cues to prompt users to enter information or filter
      content.\",\"link\":{\"href\":\"/components/feedback/chip-toggle-group?ta\
      b=code\"},\"tags\":[\"Inputs\",\"Filter\"]},{\"link\":{\"href\":\"/compon\
      ents/surfaces/tile-interactive?tab=code\"},\"heading\":\"Tile
      interactive\",\"image\":\"/assets/images/tile-interactive.svg\",\"descrip\
      tion\":\"An interactive layout component used as a generic container to
      build the base of panels, cards, lists and other content
      components.\",\"tags\":[\"Layout/Structure\",\"Navigation\",\"Inputs\"]},{\
      \"description\":\"A selectable toggle layout component used as a generic
      container to build the base of panels, cards, lists and other content
      components.\",\"heading\":\"Tile toggle
      group\",\"image\":\"/assets/images/tile-togge-group.svg\",\"link\":{\"href\
      \":\"/components/surfaces/tile-toggle-group?tab=code\"},\"tags\":[\"Layou\
      t/Structure\",\"Navigation\",\"Inputs\"]},{\"image\":\"/assets/images/for\
      m.svg\",\"heading\":\"Form\",\"description\":\"A wrapper around HTML form
      element that abstracts form validation logic away from the view
      code.\",\"link\":{\"href\":\"/components/form/fields/form\"},\"tags\":[\"\
      Layout/Structure\",\"Inputs\"]},{\"heading\":\"Field
      wrapper\",\"image\":\"/assets/images/fieldwrapper.png\",\"description\":\
      \"A utility component to help with composing consistent form
      fields.\",\"link\":{\"href\":\"/components/form/primitives/field-wrapper\
      \"},\"tags\":[\"Inputs\",\"Primitives\"]},{\"image\":\"/assets/images/che\
      ckbox.svg\",\"description\":\"A [primitive] toggle input for choosing from
      predefined
      options.\",\"heading\":\"Checkbox\",\"link\":{\"href\":\"/components/form\
      /primitives/checkbox\"},\"tags\":[\"Primitives\",\"Inputs\"]},{\"image\":\
      \"/assets/images/date-input.svg\",\"heading\":\"Date
      input\",\"description\":\"A [primitive] form component that provides a
      styled date
      selector.\",\"link\":{\"href\":\"/components/form/primitives/date-input\"\
      },\"tags\":[\"Primitives\",\"Inputs\"]},{\"image\":\"/assets/images/input\
      .svg\",\"heading\":\"Input\",\"description\":\"A [primitive] form control
      that accepts a single line of text and
      numbers.\",\"link\":{\"href\":\"/components/form/primitives/input\"},\"ta\
      gs\":[\"Inputs\",\"Primitives\"]},{\"heading\":\"Number
      input\",\"description\":\"A [primitive] input control for editing a
      numeric/quantity value with increment and decrement buttons next to
      it.\",\"link\":{\"href\":\"/components/form/primitives/number-input\"},\"\
      image\":\"/assets/images/number-input.svg\",\"tags\":[\"Inputs\",\"Primit\
      ives\"]},{\"image\":\"/assets/images/password-input.svg\",\"heading\":\"P\
      assword input\",\"description\":\"A [primitive] input for passwords with
      visibility toggle
      functionality.\",\"link\":{\"href\":\"/components/form/primitives/passwor\
      d-input\"},\"tags\":[\"Inputs\",\"Primitives\"]},{\"image\":\"/assets/ima\
      ges/radio-button.svg\",\"heading\":\"Radio button\",\"description\":\"A
      [primitive] radio button that allow a user to select a single option from
      a list of predefined
      options.\",\"link\":{\"href\":\"/components/form/primitives/radio-button\
      \"},\"tags\":[\"Inputs\",\"Primitives\"]},{\"image\":\"/assets/images/sea\
      rch-input.svg\",\"heading\":\"Search input\",\"description\":\"A
      [primitive] search input that allow users to find content by entering a
      search
      term.\",\"tags\":[\"Inputs\",\"Primitives\",\"Filter\"],\"link\":{\"href\
      \":\"/components/form/primitives/search-input\"}},{\"image\":\"/assets/im\
      ages/select.svg\",\"description\":\"A [primitive] form input used for
      selecting a value. It shows a list of predefined options for the user to
      choose
      from.\",\"heading\":\"Select\",\"tags\":[\"Inputs\",\"Primitives\"],\"link\
      \":{\"href\":\"/components/form/primitives/select\"}},{\"image\":\"/asset\
      s/images/slider.svg\",\"heading\":\"Slider\",\"description\":\"A
      [primitive] form control for choosing a value within a preset range of
      values.\",\"link\":{\"href\":\"/components/form/primitives/slider\"},\"ta\
      gs\":[\"Inputs\",\"Primitives\"]},{\"image\":\"/assets/images/text-area.s\
      vg\",\"heading\":\"Text area\",\"description\":\"A [primitive] form
      control for choosing a value within a preset range of
      values.\",\"link\":{\"href\":\"/components/form/primitives/textarea\"},\"\
      tags\":[\"Inputs\",\"Primitives\"]},{\"image\":\"/assets/images/spacer.svg\
      \",\"heading\":\"Spacer\",\"description\":\"A flexible flex spacer that
      expands along the major axis of its containing flex
      layout.\",\"link\":{\"href\":\"/components/layout/spacer\"},\"tags\":[\"L\
      ayout/Structure\"]},{\"image\":\"/assets/images/navigationmenuvertical.svg\
      \",\"description\":\"Navigation menu items meant to be used in sidedrawers
      and similar panels for vertical navigation. \",\"heading\":\"Navigation
      menu
      vertical\",\"link\":{\"href\":\"/components/navigation/navigation-menu-ve\
      rtical\"},\"tags\":[\"Navigation\"]},{\"image\":\"/assets/images/dismissi\
      ble.svg\",\"description\":\"A primitive that works as a dismiss button
      which removes the element from the view.
      \",\"heading\":\"Dismissible\",\"link\":{\"href\":\"/components/primitive\
      s/dismissible\"},\"tags\":[\"Primitives\"]},{\"image\":\"/assets/images/d\
      ismissible-group.svg\",\"heading\":\"Dismissible
      group\",\"description\":\"A set of dismissible elements (primitives) which
      remove the elements from the
      view.\",\"link\":{\"href\":\"/components/primitives/dismissible-group\"},\
      \"tags\":[\"Primitives\"]},{\"image\":\"/assets/images/sortable.svg\",\"h\
      eading\":\"Sortable\",\"description\":\"A primitive that let users sort an
      array of sibling elements via drag and
      drop.\",\"link\":{\"href\":\"/components/primitives/sortable\"},\"tags\":[\
      \"Primitives\"]}]} />"
    title: Main
slug: landing
nestedSlug:
  - landing
---
