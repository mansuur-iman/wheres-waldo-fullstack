import { prisma } from "./lib/prisma.js";

async function seed() {
  console.log("Cleaning up database...");

  await prisma.userFieldProgress.deleteMany();
  await prisma.leaderBoard.deleteMany();
  await prisma.character.deleteMany();
  await prisma.image.deleteMany();
  await prisma.field.deleteMany();

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
              xMin: 0.43800684291097997,
              xMax: 0.4780074685311164,
              yMin: 0.47340224762665933,
              yMax: 0.7117361916204149,
            },
            {
              name: "coffee cup",
              xMin: 0.8687669681048458,
              xMax: 0.923768042344577,
              yMin: 0.8149103018584166,
              yMax: 0.8790775951588069,
            },
            {
              name: "red screwdriver",
              xMin: 0.7065694000917978,
              xMax: 0.7603199249992676,
              yMin: 0.8224836180040821,
              yMax: 0.8454005084685072,
            },
            {
              name: "CNN monitor",
              xMin: 0.74876948016302,
              xMax: 0.772520098064685,
              yMin: 0.45048935010736124,
              yMax: 0.5077822574384615,
            },
            {
              name: "Blue bin",
              xMin: 0.6162660329221517,
              xMax: 0.6850178215848663,
              yMin: 0.9179994826713433,
              yMax: 0.9959178366416397,
            },
          ],
        },
        {
          url: "https://res.cloudinary.com/dguc111bs/image/upload/v1775732608/WhatsApp_Image_2026-04-09_at_13.34.03_1_hceo1n.jpg",
          order: 2,
          characters: [
            {
              name: "Scanner drone",
              xMin: 0.6087658377953101,
              xMax: 0.6762675939368845,
              yMin: 0.7094532912439345,
              yMax: 0.7644544822817907,
            },
            {
              name: "Heavy lift drone",
              xMin: 0.18000468304419845,
              xMax: 0.295007674989103,
              yMin: 0.05631415641159527,
              yMax: 0.30611123237519244,
            },
            {
              name: "Distant scout",
              xMin: 0.3600093660883969,
              xMax: 0.40501053684944655,
              yMin: 0.019646686977487216,
              yMax: 0.08839817577480755,
            },
            {
              name: "Solar pannel",
              xMin: 0.6012656426684685,
              xMax: 0.706268374444251,
              yMin: 0.34048696803164874,
              yMax: 0.4527810664006053,
            },
            {
              name: "Workers discussion",
              xMin: 0.0765632476879657,
              xMax: 0.11406361390247952,
              yMin: 0.7674830808894618,
              yMax: 0.8522755756078347,
            },
            {
              name: "Train",
              xMin: 0.8365706696354457,
              xMax: 0.9040713288215705,
              yMin: 0.3503956744369248,
              yMax: 0.4878970172234755,
            },
            {
              name: "Spool of wires",
              xMin: 0.050312991337806034,
              xMax: 0.07531323548081524,
              yMin: 0.7560246356572493,
              yMax: 0.8064417946789845,
            },
            {
              name: "Warning sign",
              xMin: 0.04656295471635465,
              xMax: 0.0578130645807088,
              yMin: 0.3228954058796147,
              yMax: 0.3549790525298099,
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
              xMin: 0.5725111818590207,
              xMax: 0.5975116701498077,
              yMin: 0.12740358792566334,
              yMax: 0.19844594836538118,
            },
            {
              name: "Clock Watcher",
              xMin: 0.45750223389762645,
              xMax: 0.46625227662244445,
              yMin: 0.11503996992185052,
              yMax: 0.12878998111163828,
            },
            {
              name: "Yellow bin",
              xMin: 0.8687669681048458,
              xMax: 0.9212679935154984,
              yMin: 0.5399076162853153,
              yMax: 0.6728255809789809,
            },
            {
              name: "Notebook",
              xMin: 0.14650114005439552,
              xMax: 0.20650160697697442,
              yMin: 0.5807098203567352,
              yMax: 0.6242515985863637,
            },
            {
              name: "Clock",
              xMin: 0.47150366921836456,
              xMax: 0.4890038054041167,
              yMin: 0.03208341553762094,
              yMax: 0.06645850361364337,
            },
            {
              name: "Green Basin",
              xMin: 0.8767637051818513,
              xMax: 0.9855154060865973,
              yMin: 0.15715143732725298,
              yMax: 0.22819328601769934,
            },
          ],
        },
        {
          url: "https://res.cloudinary.com/dguc111bs/image/upload/v1775732171/WhatsApp_Image_2026-04-09_at_13.34.04_hqibvv.jpg",
          order: 2,
          characters: [
            {
              name: "Brain",
              xMin: 0.7312642825055177,
              xMax: 0.920017969100959,
              yMin: 0.5857413972141655,
              yMax: 0.8790775951588069,
            },
            {
              name: "Skeleton",
              xMin: 0.007500146487236079,
              xMax: 0.0700013672142034,
              yMin: 0.15490385648297347,
              yMax: 0.5605328177032979,
            },
            {
              name: "Human torso",
              xMin: 0.43750854508877124,
              xMax: 0.5650110353717847,
              yMin: 0.03802771511440541,
              yMax: 0.588033086260608,
            },
            {
              name: "Heart Diagram",
              xMin: 0.7850153323307096,
              xMax: 0.9012676028828688,
              yMin: 0.012819135603537795,
              yMax: 0.49178214631002254,
            },
            {
              name: "Surgical gloves",
              xMin: 0.2662552002968808,
              xMax: 0.29500576183128574,
              yMin: 0.4505317434740574,
              yMax: 0.5055322805886776,
            },
            {
              name: "Syrenge",
              xMin: 0.5037598390593566,
              xMax: 0.5250102541065255,
              yMin: 0.8699108389730369,
              yMax: 0.9615784008307373,
            },
            {
              name: "Cranium",
              xMin: 0.16625324713373307,
              xMax: 0.19500380866813805,
              yMin: 0.8607440827872668,
              yMax: 0.9386615103663122,
            },
            {
              name: "Dr lisa",
              xMin: 0.5300103517646829,
              xMax: 0.5612609621281666,
              yMin: 0.08156980699681313,
              yMax: 0.20761270455115122,
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
