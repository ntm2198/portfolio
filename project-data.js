window.portfolioProjects = [
  // ── Cardboard Calamity ─────────────────────────────────────────────────────
  // Summer 2026 DIY alt-control game project. Fill in details when ready.
 // Drop-in replacement for the existing "cardboard-calamity" object in your projects array.
  // New fields vs. the previous version: program, people, cohort, bio.
  // Your detail-page template will need render logic for those (see notes).
  {
    id: "cardboard-calamity",
    title: "Cardboard Calamity",
    detailTitle: "Cardboard Calamity: A DIY Alt-Control Game",
    label: "Alt-Control Game Dev",
    theme: "#c2853f",
    isNew: true,
    overview:
      "An arcade cabinet from an alternate timeline where all essential infrastructure is made of cardboard. Slide the control handle to keep the dials in the safe zone, and see how long you can hold it together. Built and exhibited during a four-week alt-control games residency in Berlin.",
    goal:
      "Explore how physical, handcrafted interfaces change the feel of digital play - and how a game's mechanics can carry an argument that its text refuses to make out loud.",
    impact:
      "Exhibited 31 July 2026 in the closing public showcase of the Summer 2026 cohort at School of Machines, Making & Make-Believe in Berlin, alongside seven other artists from eight countries. Ongoing development toward documentation others can build from.",
    tech: [
      "Arduino",
      "Physical Computing",
      "Alt-Control Design",
      "DIY Hardware",
      "Servo Mechanics",
    ],
    visual: "cardboard",
    url: "./projects/cardboard-calamity.html",
    snapshot: {
      label: "Summer 2026 - Berlin",
      image: "./assets/projects/cardboard-calamity/photos/cover-exhibition.jpg",
      imagePosition: "center",
      audience: "Public exhibition / Playtesters",
      format: "Alt-control arcade installation",
      role: "Designer, builder, programmer",
      program: "School of Machines, Making & Make-Believe",
    },
 
    storyTitle: "What happens when the controller is the craft project?",
    storyIntro:
      "Cardboard Calamity started as a summer experiment in DIY game hardware - build the physical interface from scratch, then design a game that only makes sense through that interface. It ended up being about how it feels when the thing you're managing keeps speeding up and nobody will admit it.",
 
    panels: [
      {
        title: "The concept",
        body:
          "An alt-control game played entirely through a handbuilt cardboard arcade cabinet - a sliding control handle, physical dials, and switches assembled from salvaged materials and an Arduino. Keep the dials in the safe zone. The dials gradually speed up to making demands of the game harder to meet. The physical act of moving the controller was an intentional part of the design.",
      },
      {
        title: "How it works",
        body:
          "An Arduino Mega drives the cabinet over a shared I2C bus: a PCA9685 servo driver moves the physical dial needles, debounced switches read player input, and a small OLED handles on-screen feedback. Servo power runs on its own supply so the display doesn't brown out when every needle swings at once. Non-blocking servo control and a dirty-flag render loop keep the whole thing responsive on modest hardware. The finished cabinet is fully self-contained, no extra equipment needed.",
      },
      {
        title: "How it got here",
        body:
          "The pitch I walked in with was a different game: a social sim in the style of Persona commenting on the limitations of personal choice, played through a modified rubber stamp - you think you're deciding, but you aren't, and over-optimizing isn't worth it. The servos and the Arduino Mega survived the rewrite; so did the thesis. Cardboard Calamity says the same thing with a straighter face.",
      },
      {
        title: "Where it was made",
        body:
          "Built during 'Creating Alt-Ctrl Games as Feminist Art Practice,' a four-week full-time program (6–31 July 2026) at School of Machines, Making & Make-Believe in Berlin-Mitte. The program frames game-making as a way to examine the systems of power it wants to expose - asking whether the political landscape of games changes when you change who gets to build them. Four weeks running from play and paper prototyping, through bitsy and Godot, Krita for visual assets, Audacity for sound, and Dialogic for non-linear writing, into electronics, materials, and a public exhibition on the final evening. Participants are invited to stay on for a one-month residency at Make-Believe Studio on the fifth floor of ACUD.",
      },
      {
        title: "About the school",
        body:
          "School of Machines, Making & Make-Believe is an independent school founded in Berlin in 2014 by artist and educator Rachel Uwa, working at the intersection of art, technology, design, and human connection. It runs small, intensive, hands-on programs taught by practicing artists and technologists, each ending in a public exhibition of student work. The school deliberately treats prior experience as optional and keeps classes small, with solidarity tickets and scholarships aimed at women, BIPOC, LGBTQIA+, and other communities under-represented in art and tech. Every program is one-of-a-kind - topics, instructors, duration, and even the host country shift year to year.",
      },
      {
        title: "Core Design Questions",
        items: [
          "How physical affordances shape player intuition and game feel.",
          "What mechanics are uniquely suited to dial and handle input - things a gamepad can't ask of you.",
          "How escalating difficulty reads as a systems critique rather than a difficulty curve.",
          "How to document a DIY build so others can recreate it from salvaged parts.",
        ],
      },
      {
        title: "Status",
        body:
          "Playable prototype, exhibited in Berlin, still in active development. Wiring diagram, build documentation, and playtest notes in progress.",
      },
    ],
 
    program: {
      name: "Creating Alt-Ctrl Games as Feminist Art Practice",
      school: "School of Machines, Making & Make-Believe",
      location: "Berlin-Mitte, Germany",
      dates: "6–31 July 2026",
      exhibition: "31 July 2026",
      format: "Four weeks, full-time, eight-person international cohort",
      founded: 2014,
      founder: "Rachel Uwa",
      url: "https://www.schoolofma.org/summer-2026/creating-alt-ctrl-as-feminist-art-practice",
      schoolUrl: "https://www.schoolofma.org/",
    },
 
    people: [
      {
        name: "lislis",
        pronouns: "they/them",
        role: "Lead instructor - creative technologist, activist, artist",
        url: "http://lislis.xyz",
      },
      {
        name: "Rachel Uwa",
        pronouns: "they/she",
        role: "Program facilitator; founder & creative director, School of MA",
        url: "https://www.schoolofma.org/about",
      },
      {
        name: "Chloé Desmoineaux",
        pronouns: "they/them",
        role: "Guest - Alt+Ctrl artist & game curator; alt.ctrl and queer game theory workshop",
        url: "https://chloedesmoineaux.surf/",
      },
      {
        name: "Lorenzo Pilia",
        pronouns: "he/him",
        role: "Guest - curator & event producer, Talk & Play / Saftladen",
        url: "https://lorenzo.pilia.it/",
      },
      {
        name: "Gerard Roberts (kidkanevil)",
        pronouns: "he/him",
        role: "Guest - producer & DJ; audio workshop",
        url: "https://kidkanevilofficial.com/",
      },
      {
        name: "Jira Duguid",
        pronouns: "she/her",
        role: "Guest - artist, Fantasia Malware; artist talk",
        url: "https://fantasia-malware.net/",
      },
      {
        name: "Niklas Roy",
        pronouns: "he/him",
        role: "Guest - artist & inventor; studio visit and artist talk",
        url: "https://www.niklasroy.com/",
      },
      {
        name: "Kati Hyyppä",
        pronouns: "she/her",
        role: "Guest - artist working in art, technology & participation; studio visit",
        url: "https://katihyyppa.com/",
      },
    ],
 
    // Cohort listing: names, countries, and project titles only.
    // Their own descriptions and bios are theirs to publish - link out instead.
    cohort: [
      { name: "Alexa Barboza Joseph", country: "Costa Rica", project: "Un ladrillito" },
      { name: "Alicia García Muñoz", country: "Spain", project: "bichos" },
      { name: "Bertha Elena Artero Ponce", country: "Bolivia", project: "Pulpo-Paint & Jukumari-Collector" },
      { name: "Didre Schutte (Studio BNBeast)", country: "Netherlands", project: "Pigeon's Superstition" },
      { name: "Némo Quehen", country: "France", project: "A Small Break" },
      { name: "Nicholas Markus", country: "United States", project: "Cardboard Calamity" },
      { name: "Selma Laura Köran", country: "Germany", project: "Behämmert" },
      { name: "Simón Jaramillo Vallejo", country: "Colombia", project: "Huellas de Carbón 8-Bit" },
    ],
 
    bio:
      "Nick Markus is a primary school STEM educator pursuing his master's at NYU Steinhardt (the teaching one, not the Art & Timothée Chalamet one). His work brings practical technology literacy to minoritized populations, helping young people think critically about the technology they use.",
 
    gallery: [
      {
        label: "Cabinet build",
        src: "./assets/projects/cardboard-calamity/photos/cabinet-build.jpg",
        alt: "Hand holding an unattached cardboard control panel fitted with five servo motors, above the partially built cardboard cabinet body.",
      },
      {
        label: "Dial mechanism detail",
        src: "./assets/projects/cardboard-calamity/photos/dial-mechanism-detail.jpg",
        alt: "Close-up of a chrome control handle wired into the cardboard cabinet, with an Arduino Mega and jumper wires visible behind it.",
      },
      {
        label: "Control panel detail",
        src: "./assets/projects/cardboard-calamity/photos/control-panel-detail.jpg",
        alt: "Finished cardboard control panel with five servo-driven dial needles, a small OLED screen, a red arcade button, and hand-drawn icons including a skull, heart, and peace sign.",
      },
      {
        label: "Electronics assembly",
        src: "./assets/projects/cardboard-calamity/photos/electronics-assembly.jpg",
        alt: "Arduino Mega and breadboard wiring inside the cardboard cabinet, connected to servo motors and the control handle.",
      },
      {
        label: "Berlin exhibition, 31 July 2026",
        src: "./assets/projects/cardboard-calamity/photos/berlin-exhibition.jpg",
        alt: "The finished Cardboard Calamity cabinet on display next to its exhibition placard, lit by a teal light bar.",
      },
      {
        label: "Exhibition in action",
        src: "./assets/projects/cardboard-calamity/photos/exhibition-in-action.jpg",
        alt: "A visitor turns the control handle on the Cardboard Calamity cabinet during the exhibition, with other attendees visible in the background.",
      },
    ],

    videos: [
      {
        title: "Cardboard Calamity In Action",
        vimeoId: "1220940919",
      },
      {
        title: "Cardboard Calamity In Action",
        vimeoId: "1220940902",
      },
    ],
  }
 ,
  {
    id: "game-based-learning",
    title: "Game-Based Skill Building for Students with ADHD",
    detailTitle: "Game-Based Skill Building for students with ADHD",
    label: "Game Design for Education",
    category: "NYU Pilot",
    theme: "#d47654",
    overview:
      "A physical board game designed to be used in-class to scaffold executive functioning skills for middle school students with ADHD.",
    goal:
      "Explore how board games can help middle schoolers with ADHD build executive functioning skills within a traditional learning environment.",
    impact:
      "Students practice planning, shifting, and checking their work through playful systems, tangible pieces, and structured feedback.",
    tech: ["Game Design", "ADHD Friendly Learning", "Playful Learning", "3D Printing & Rapid Prototyping"],
    visual: "game",
    url: "./projects/game-based-learning.html",
    snapshot: {
      label: "Road Ready Rally",
      image: "./assets/projects/game-based-learning/photos/cover-image.png",
      imagePosition: "top",
      audience: "Graduate level student design team.",
      format: "Research-backed board game prototype.",
      role: "Researcher, playtesting, physical prototyping.",
    },
    storyTitle:
      "We asked: how can board games be used to help middle schoolers with ADHD build executive functioning skills within a traditional learning environment.",
    panels: [
      {
        title: "What this was",
        body:
          "Road Ready Rally is an inclusive, tangible educational board game built to support executive functioning and materials organization skills for neurodiverse middle school students. Grounded in Zimmerman's Self-Regulated Learning Model and Flow Theory, the gameplay balances sensory regulation with targeted cognitive challenges to maintain an optimal instructional state. The platform features a highly adaptive architecture - K-12 STEM educators can substitute customized academic review decks tied directly to their curriculum. The result is a cooperative learning experience that makes executive functioning strategies visible, tangible, and low-pressure.",
      },
      {
        title: "Learning goals",
        items: [
          "Support planning, flexible thinking, and self-monitoring through gameplay.",
          "Use playtesting evidence to revise rules, pacing, and physical components.",
          "Make executive functioning strategies visible, tangible, and repeatable.",
        ],
      },
      {
        title: "Learning theory",
        body:
          "In the context of playing games, the learning content is emergent rather than explicit. These games represent a challenge to solve, for which players must implement their cognitive abilities and knowledge that belongs to the curricular content. (Vita-Barrull et al., 2024)",
      },
    ],
    gallery: [
      {
        label: "Prototype Components",
        src: "./assets/projects/game-based-learning/photos/grab3.png",
        alt: "3D printed Road Ready Rally game components including colorful tile pieces and custom tokens on a table",
      },
      {
        label: "Character Card Designs",
        src: "./assets/projects/game-based-learning/photos/cover-image.png",
        alt: "Road Ready Rally character cards showing four roles: The Farmer, The Mechanic, The Police Officer, and The Delivery Driver",
      },
      {
        label: "Playtest Documentation",
      },
    ],
  },
  {
    id: "interactive-installation",
    title: "Museum of Tattoos Interactive Exhibit",
    category: "NYU Pilot",
    detailTitle: "Museum of Tattoos: Projection Mapping & Hands-On Interpretation",
    label: "Museum + Projection Mapping",
    theme: "#7c6aa6",
    overview:
      "An interactive exhibit exploring traditional tattoo techniques, cultural appreciation, and the evolution of tattoo technology through projection mapping, printed interpretation, videos, and hands-on banana tattooing.",
    goal:
      "Help visitors understand the traditional roots and modern technologies of tattooing while fostering cultural appreciation rather than appropriation.",
    impact:
      "The exhibit balanced historical context, analog making, digital media, and public piloting so visitors could leave with deeper respect for tattoo cultures and a tactile understanding of the craft.",
    tech: ["MadMapper", "Blender", "Projection Mapping", "User Research", "Interpretive Media", "Cultural Critique"],
    visual: "installation",
    url: "./projects/interactive-installation.html",
    snapshot: {
      label: "April 25 Exhibit Pilot",
      image: "./assets/projects/interactive-installation/photos/cover-image.png",
      imagePosition: "center",
      audience: "Public pilot visitors and NYU learning experience design community.",
      format: "Interactive museum exhibit with digital projection, printed interpretation, videos, and hands-on stations.",
      role: "Technology operations, department coordination, and progress documentation.",
    },
    storyTitle: "A public exhibit where traditional tattoo practices met interactive media.",
    storyIntro:
      "Visitors moved from historical and cultural context into two participatory stations: a projection-mapped tattoo try-on and a tactile stick-and-poke banana activity. Our learning goals were centered on teaching that technology can be a tool for cultural expression and critique and that the difference between traditonal method and modern tech is more fluid than one might think.",
    panels: [
      {
        title: "What this was",
        body:
          "Museum of Tattoos was a room-scale interpretive exhibit in 370 Jay St. Room 522. Visitors entered through an origins gallery, moved through displays on traditional tattoo techniques and machine history, then participated in low-tech and high-tech interactive stations.",
      },
      {
        title: "Learning goals",
        items: [
          "Understand the traditional roots and modern evolution of tattoo techniques.",
          "Build cultural appreciation for tattoo practices across Polynesian, Japanese, Filipinx, Inuit, Thai, and other traditions.",
          "Compare interpretive media formats including wall text, QR-linked videos, projection mapping, and hands-on material practice.",
        ],
      },
      {
        title: "What visitors experienced",
        body:
          "Visitors could virtually try tattoo designs on their skin through a projection mapping setup, practice traditional poking techniques on bananas with bamboo and ink, scan QR-linked videos, read gallery labels, and browse a small library of tattoo culture resources.",
      },
    ],
    gallery: [
      {
        label: "Opening Learning Content of museum",
        src: "./assets/projects/interactive-installation/photos/museum-overview.jpeg",
      },
      {
        label: "Tradition Meets Technology",
        src: "./assets/projects/interactive-installation/photos/learning-content.jpeg",
      },
      {
        label: "My teammate Celine tries out the projection mapping",
        src: "./assets/projects/interactive-installation/photos/celine-happy.jpeg",
      },
    ],
  },
  {
    id: "hannah-senesh-stem",
    title: "Makerspace Integration & K-7 Robotics",
    category: "Career",
    detailTitle: "Fostering Inclusive Computational Thinking at Hannah Senesh",
    label: "K-7 STEM Curriculum & Makerspace",
    theme: "#4A90E2",
    overview:
      "Designing and facilitating an active, multi-grade STEM enrichment program that brings digital citizenship, coding fundamentals, and physical computing to life within an inclusive school makerspace.",
    goal:
      "Empower younger learners to transition from passive consumers of media to active producers of technology through tangible programming blocks and collaborative engineering design loops.",
    impact:
      "Cultivated an empathetic and highly engaging studio space for grades 2-7, leveraging hands-on robotics toolchains to democratize access to core computational concepts while establishing strong communicative partnerships with student families.",
    tech: ["Scratch", "Micro:Bit", "Hummingbird Robotics", "LittleBits", "Google for Education"],
    visual: "creative",
    url: "./projects/hannah-senesh-stem.html",
    snapshot: {
      label: "Sept 2025 - Present",
      image: "./assets/projects/hannah-senesh-stem/photos/newcover.jpg",
      imagePosition: "center",
      audience: "Grades 2-7",
      format: "School-Day Enrichment Curriculum & Studio Space Management",
      role: "STEM Education Specialist",
    },
    storyTitle: "Building a Culture of Creative Coding and Physical Computing",
    storyIntro:
      "How intentional hardware integration turns abstract software syntax into meaningful, tangible student expressions.",
    panels: [
      {
        title: "What this was",
        body:
          "A comprehensive school-day STEM curriculum framework explicitly mapped out for a wide array of developmental bands (ages 7–13). By scaffolding digital design workflows alongside physical electronics prototyping tools, this environment turns standard lessons into collaborative maker sessions where student autonomy is balanced with core mathematical and logical instruction.",
      },
      {
        title: "Learning goals",
        items: [
          "Master foundational coding logic-including conditionals, loops, variables, and events-across software and hardware environments.",
          "Apply iterative engineering design principles to safely construct, wire, and modify physical robotics modules.",
          "Understand and actively practice digital citizenship protocols while collaboratively sharing a high-resource makerspace ecosystem.",
        ],
      },
      {
        title: "What students made",
        body:
          "Interactive animatronic creatures built via Hummingbird components, physical smart-assist devices using integrated Micro:Bit sensors, and rich multi-level narrative animations coded inside Scratch.",
      },
    ],
    gallery: [
      {
        label: "Creativity Meets Technology",
        src: "./assets/projects/hannah-senesh-stem/photos/amongus.jpg",
        alt: "LittleBits components arranged on a hand-drawn Among Us character sketch on a large sheet of paper on a makerspace table",
      },
      {
        label: "Scratch Logic Walkthrough",
        src: "./assets/projects/hannah-senesh-stem/photos/coding.jpg",
        alt: "A student codes a LittleBits robot in Scratch on a laptop, with the physical robot prototype beside the keyboard",
      },
      {
        label: "Makerspace Studio Dynamic",
        src: "./assets/projects/hannah-senesh-stem/photos/jedi.jpg",
        alt: "A cardboard humanoid figure connected to a chain of glowing green LittleBits LEDs and a battery on a corkboard table",
      },
    ],
  },
  {
    id: "lavner-robotics-3dprinting",
    title: "Project-Based Robotics & 3D Printing Summer Program",
    detailTitle: "Accelerated Tech Literacy: Rapid Prototyping for Young Makers",
    label: "Summer STEM Studio",
    category: "Career",
    theme: "#E65100",
    overview:
      "Leading fast-paced, immersive summer technical programs that blended spatial computer modeling, hardware diagnostics, and autonomous robotic assembly.",
    goal:
      "Demystify complex digital fabrication tools and autonomous robotics systems for young learners by grounding high-level spatial theory inside structured, playful project challenges.",
    impact:
      "Successfully balanced demanding technical workflows with acute behavioral and emotional support, ensuring that intense troubleshooting loops became avenues for resilience rather than student frustration.",
    tech: ["LEGO Mindstorms", "3D Printing", "Digital Design", "Rapid Prototyping"],
    visual: "maker",
    url: "./projects/lavner-robotics-3dprinting.html",
    snapshot: {
      label: "Summer 2025",
      image: "./assets/projects/lavner-robotics-3dprinting/photos/robots-lineup.jpg",
      imagePosition: "center",
      audience: "Ages 7-12",
      format: "Intensive Week-Long Project-Based Programs",
      role: "Summer Instructor",
    },
    storyTitle: "From Digital Pixels to Physical Plastic: Demystifying Automation",
    storyIntro:
      "Bridging software modeling with real-world computer-aided manufacturing parameters for elementary and middle schoolers.",
    panels: [
      {
        title: "What this was",
        body:
          "A high-momentum educational accelerator consisting of nine unique weekly modules. The curriculum challenge lay in translating industrial creative tools-such as slicing software parameters for additive manufacturing and mechanical gear-ratio logic-into clear, age-appropriate conceptual milestones.",
      },
      {
        title: "Learning goals",
        items: [
          "Independently diagnose, maintain, and troubleshoot mechanical calibration and software failures on active 3D printers.",
          "Program LEGO Mindstorms logic to utilize sensor feedback loops for real-world automated task completion.",
          "Convert original 3D ideas into printable, watertight structural files by mastering spatial constraints.",
        ],
      },
      {
        title: "What students made",
        body:
          "Custom-sliced mechanical toys, functional 3D printed objects, and fully autonomous robotic platforms capable of self-correcting through labyrinthine navigation maps.",
      },
    ],
    gallery: [
      {
        label: "3D Printer Output",
        src: "./assets/projects/lavner-robotics-3dprinting/photos/printer-output.jpg",
        alt: "A FlashForge 3D printer bed displaying several completed blue student prints including a humanoid figure, a decorative medallion, and modular shapes",
      },
      {
        label: "LEGO Mindstorms Showcase",
        src: "./assets/projects/lavner-robotics-3dprinting/photos/robots-lineup.jpg",
        alt: "Seven LEGO Mindstorms robots built by students lined up against a white wall on a carpeted floor",
      },
      {
        label: "Inkscape Design Workflow",
        src: "./assets/projects/lavner-robotics-3dprinting/photos/design-workflow.jpg",
        alt: "A student's Inkscape vector design displayed on a large monitor showing a sneaker poster with the text Don't follow others, Make your own trail",
      },
    ],
  },
  {
    id: "bluestamp-engineering-instruction",
    title: "High School Embedded Systems Incubator",
    detailTitle: "Microcontroller Architecture: Hard-Coded Systems Instruction",
    label: "Advanced STEM Instruction",
    category: "Career",
    theme: "#1565C0",
    overview:
      "Guiding high school students through a rigorous, professional-grade physical engineering pipeline centered on open-source microcomputers, circuit mapping, and full-stack technical logs.",
    goal:
      "Transition secondary students away from sandboxed software platforms and into raw hardware design and low-level source-code development.",
    impact:
      "Transformed novice participants into capable, self-directed developers who successfully launched integrated electronic systems and formally published their engineering design logs online.",
    tech: ["Python", "JavaScript", "Arduino", "Raspberry Pi", "Circuit Assembly"],
    visual: "physical",
    url: "./projects/bluestamp-engineering-instruction.html",
    snapshot: {
      label: "Summers 2018 & 2023",
      image: "./assets/projects/bluestamp-engineering-instruction/photos/project-unique-cover.jpg",
      imagePosition: "center",
      audience: "High School Students",
      format: "7-Week Intensive Engineering Residency",
      role: "Summer Instructor",
    },
    storyTitle: "Fostering Engineering Autonomy Through Low-Level Computing",
    storyIntro:
      "Cultivating technical communication skills alongside advanced microcomputing and hardware assembly pipelines.",
    panels: [
      {
        title: "What this was",
        body:
          "An engineering residency modeling industry R&D cycles. High school students designed independent electronic prototypes from scratch, mastering everything from raw electrical schematic interpretation to embedded systems coding and manual component wiring.",
      },
      {
        title: "Learning goals",
        items: [
          "Write custom embedded programs in Python and script-based frameworks to drive microchip I/O operations.",
          "Read and implement hardware wiring layouts to form complex electrical networks safely.",
          "Synthesize and update detailed public engineering portfolios to explain complex diagnostic histories.",
        ],
      },
      {
        title: "What students made",
        body:
          "Sensor-integrated IoT apparatuses, web-connected microcontroller systems, and public portfolio pages featuring formal build logs, wiring diagrams, and functional hardware diagnostic videos.",
      },
    ],
    gallery: [
      {
        label: "Student Final Project",
        src: "./assets/projects/bluestamp-engineering-instruction/photos/robot-tank.jpg",
        alt: "A student-built Arduino tank robot with treaded chassis, colorful wiring, and a transparent blue wireless PS2-style controller on a black surface",
      },
      {
        label: "RGB LED Matrix Build",
        src: "./assets/projects/bluestamp-engineering-instruction/photos/led-matrix.jpg",
        alt: "A large RGB LED matrix panel displaying colorful scrolling text, wired to an Arduino Mega on a workbench",
      },
      {
        label: "First Working Circuit",
        src: "./assets/projects/bluestamp-engineering-instruction/photos/arduino-lcd.jpg",
        alt: "An Arduino Uno connected to a breadboard and LCD screen displaying Hello ARDUINO FORUM on a carpet",
      },
    ],
  },
];
