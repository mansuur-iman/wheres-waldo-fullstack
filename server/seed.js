import { prisma } from "./lib/prisma.js";

async function seed() {
  console.log("Cleaning up database...");

  await prisma.userFieldProgress.deleteMany();
  await prisma.leaderBoard.deleteMany();
  await prisma.character.deleteMany();
  await prisma.image.deleteMany();
  await prisma.field.deleteMany();

  const toPercent = (num) => num / 100;

  const fieldsData = [
    {
      name: "Engineering",
      description: "A crowded marketplace with hidden gems.",
      thumbnail:
        "https://res.cloudinary.com/dguc111bs/image/upload/v1775732646/WhatsApp_Image_2026-04-09_at_13.34.03_pl2k2v.jpg",
      images: [
        {
          url: "https://res.cloudinary.com/dguc111bs/image/upload/v1775732554/WhatsApp_Image_2026-04-09_at_11.19.54_ow9eby.jpg",
          order: 1,
          characters: [
            {
              name: "assistant robot",
              xMin: toPercent(43.800684291097997),
              xMax: toPercent(47.80074685311164),
              yMin: toPercent(47.340224762665933),
              yMax: toPercent(71.17361916204149),
            },
            {
              name: "coffee cup",
              xMin: toPercent(86.87669681048458),
              xMax: toPercent(92.3768042344577),
              yMin: toPercent(81.49103018584166),
              yMax: toPercent(87.90775951588069),
            },
            {
              name: "red screwdriver",
              xMin: toPercent(70.65694000917978),
              xMax: toPercent(76.03199249992676),
              yMin: toPercent(82.24836180040821),
              yMax: toPercent(84.54005084685072),
            },
            {
              name: "CNN monitor",
              xMin: toPercent(74.876948016302),
              xMax: toPercent(77.2520098064685),
              yMin: toPercent(45.048935010736124),
              yMax: toPercent(50.77822574384615),
            },
            {
              name: "Blue bin",
              xMin: toPercent(61.62660329221517),
              xMax: toPercent(68.50178215848663),
              yMin: toPercent(91.79994826713433),
              yMax: toPercent(99.59178366416397),
            },
          ],
        },
        {
          url: "https://res.cloudinary.com/dguc111bs/image/upload/v1775732608/WhatsApp_Image_2026-04-09_at_13.34.03_1_hceo1n.jpg",
          order: 2,
          characters: [
            {
              name: "Scanner drone",
              xMin: toPercent(60.87658377953101),
              xMax: toPercent(67.62675939368845),
              yMin: toPercent(70.94532912439345),
              yMax: toPercent(76.44544822817907),
            },
            {
              name: "Heavy lift drone",
              xMin: toPercent(18.000468304419845),
              xMax: toPercent(29.5007674989103),
              yMin: toPercent(5.631415641159527),
              yMax: toPercent(30.611123237519244),
            },
            {
              name: "Distant scout",
              xMin: toPercent(36.00093660883969),
              xMax: toPercent(40.501053684944655),
              yMin: toPercent(1.9646686977487216),
              yMax: toPercent(8.839817577480755),
            },
            {
              name: "Solar pannel",
              xMin: toPercent(60.12656426684685),
              xMax: toPercent(70.6268374444251),
              yMin: toPercent(34.048696803164874),
              yMax: toPercent(45.27810664006053),
            },
            {
              name: "Workers discussion",
              xMin: toPercent(7.65632476879657),
              xMax: toPercent(11.406361390247952),
              yMin: toPercent(76.74830808894618),
              yMax: toPercent(85.22755756078347),
            },
            {
              name: "Train",
              xMin: toPercent(83.65706696354457),
              xMax: toPercent(90.40713288215705),
              yMin: toPercent(35.03956744369248),
              yMax: toPercent(48.78970172234755),
            },
            {
              name: "Spool of wires",
              xMin: toPercent(5.0312991337806034),
              xMax: toPercent(7.531323548081524),
              yMin: toPercent(75.60246356572493),
              yMax: toPercent(80.64417946789845),
            },
            {
              name: "Warning sign",
              xMin: toPercent(4.656295471635465),
              xMax: toPercent(5.78130645807088),
              yMin: toPercent(32.28954058796147),
              yMax: toPercent(35.49790525298099),
            },
          ],
        },
      ],
    },
    {
      name: "Medicine",
      description: "A busy celebration. Can you find the guests?",
      thumbnail:
        "https://res.cloudinary.com/dguc111bs/image/upload/v1775731989/WhatsApp_Image_2026-04-09_at_13.34.02_rnmnx4.jpg",
      images: [
        {
          url: "https://res.cloudinary.com/dguc111bs/image/upload/v1775731998/WhatsApp_Image_2026-04-09_at_13.34.02_1_g8bkti.jpg",
          order: 1,
          characters: [
            {
              name: "Dr Michael",
              xMin: toPercent(57.25111818590207),
              xMax: toPercent(59.75116701498077),
              yMin: toPercent(12.740358792566334),
              yMax: toPercent(19.844594836538118),
            },
            {
              name: "Clock Watcher",
              xMin: toPercent(45.750223389762645),
              xMax: toPercent(46.625227662244445),
              yMin: toPercent(11.503996992185052),
              yMax: toPercent(12.878998111163828),
            },
            {
              name: "Yellow bin",
              xMin: toPercent(86.87669681048458),
              xMax: toPercent(92.12679935154984),
              yMin: toPercent(53.99076162853153),
              yMax: toPercent(67.28255809789809),
            },
            {
              name: "Notebook",
              xMin: toPercent(14.650114005439552),
              xMax: toPercent(20.650160697697442),
              yMin: toPercent(58.07098203567352),
              yMax: toPercent(62.42515985863637),
            },
            {
              name: "Clock",
              xMin: toPercent(47.150366921836456),
              xMax: toPercent(48.90038054041167),
              yMin: toPercent(3.208341553762094),
              yMax: toPercent(6.645850361364337),
            },
            {
              name: "Green Basin",
              xMin: toPercent(87.67669681048458),
              xMax: toPercent(98.55154060865973),
              yMin: toPercent(15.715143732725298),
              yMax: toPercent(22.819328601769934),
            },
          ],
        },
        {
          url: "https://res.cloudinary.com/dguc111bs/image/upload/v1775732171/WhatsApp_Image_2026-04-09_at_13.34.04_hqibvv.jpg",
          order: 2,
          characters: [
            {
              name: "Brain",
              xMin: toPercent(73.12642825055177),
              xMax: toPercent(92.0017969100959),
              yMin: toPercent(58.57413972141655),
              yMax: toPercent(87.90775951588069),
            },
            {
              name: "Skeleton",
              xMin: toPercent(0.7500146487236079),
              xMax: toPercent(0.0700013672142034),
              yMin: toPercent(0.15490385648297347),
              yMax: toPercent(0.5605328177032979),
            },
            {
              name: "Human torso",
              xMin: toPercent(0.43750854508877124),
              xMax: toPercent(0.5650110353717847),
              yMin: toPercent(0.03802771511440541),
              yMax: toPercent(0.588033086260608),
            },
            {
              name: "Heart Diagram",
              xMin: toPercent(0.7850153323307096),
              xMax: toPercent(0.9012676028828688),
              yMin: toPercent(0.012819135603537795),
              yMax: toPercent(0.49178214631002254),
            },
            {
              name: "Surgical gloves",
              xMin: toPercent(0.2662552002968808),
              xMax: toPercent(0.29500576183128574),
              yMin: toPercent(0.4505317434740574),
              yMax: toPercent(0.5055322805886776),
            },
            {
              name: "Syrenge",
              xMin: toPercent(0.5037598390593566),
              xMax: toPercent(0.5250102541065255),
              yMin: toPercent(0.8699108389730369),
              yMax: toPercent(0.9615784008307373),
            },
            {
              name: "Cranium",
              xMin: toPercent(0.16625324713373307),
              xMax: toPercent(0.19500380866813805),
              yMin: toPercent(0.8607440827872668),
              yMax: toPercent(0.9386615103663122),
            },
            {
              name: "Dr lisa",
              xMin: toPercent(0.5300103517646829),
              xMax: toPercent(0.5612609621281666),
              yMin: toPercent(0.08156980699681313),
              yMax: toPercent(0.20761270455115122),
            },
          ],
        },
      ],
    },
  ];

  for (const field of fieldsData) {
    const createdField = await prisma.field.create({
      data: {
        name: field.name,
        thumbnailUrl: field.thumbnail,
        description: field.description,
      },
    });

    for (const img of field.images) {
      const createdImage = await prisma.image.create({
        data: {
          imageUrl: img.url,
          order: img.order,
          fieldId: createdField.id,
        },
      });

      await prisma.character.createMany({
        data: img.characters.map((character) => ({
          name: character.name,
          xMin: character.xMin,
          xMax: character.xMax,
          yMin: character.yMin,
          yMax: character.yMax,
          fieldId: createdField.id,
          imageId: createdImage.id,
        })),
      });
    }
  }

  console.log(
    "Seeding complete: Fields, 2+ Images per field, and 2+ Characters per image created.",
  );
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
