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
            // Already in 0-100 range — used as-is
            {
              name: "assistant robot",
              xMin: 43.800684291097997,
              xMax: 47.80074685311164,
              yMin: 47.340224762665933,
              yMax: 71.17361916204149,
            },
            {
              name: "coffee cup",
              xMin: 86.87669681048458,
              xMax: 92.3768042344577,
              yMin: 81.49103018584166,
              yMax: 87.90775951588069,
            },
            {
              name: "red screwdriver",
              xMin: 70.65694000917978,
              xMax: 76.03199249992676,
              yMin: 82.24836180040821,
              yMax: 84.54005084685072,
            },
            {
              name: "CNN monitor",
              xMin: 74.876948016302,
              xMax: 77.2520098064685,
              yMin: 45.048935010736124,
              yMax: 50.77822574384615,
            },
            {
              name: "Blue bin",
              xMin: 61.62660329221517,
              xMax: 68.50178215848663,
              yMin: 91.79994826713433,
              yMax: 99.59178366416397,
            },
          ],
        },
        {
          url: "https://res.cloudinary.com/dguc111bs/image/upload/v1775732608/WhatsApp_Image_2026-04-09_at_13.34.03_1_hceo1n.jpg",
          order: 2,
          characters: [
            {
              name: "Scanner drone",
              xMin: 60.87658377953101,
              xMax: 67.62675939368845,
              yMin: 70.94532912439345,
              yMax: 76.44544822817907,
            },
            {
              name: "Heavy lift drone",
              xMin: 18.000468304419845,
              xMax: 29.5007674989103,
              yMin: 5.631415641159527,
              yMax: 30.611123237519244,
            },
            {
              name: "Distant scout",
              xMin: 36.00093660883969,
              xMax: 40.501053684944655,
              yMin: 1.9646686977487216,
              yMax: 8.839817577480755,
            },
            {
              name: "Solar pannel",
              xMin: 60.12656426684685,
              xMax: 70.6268374444251,
              yMin: 34.048696803164874,
              yMax: 45.27810664006053,
            },
            {
              name: "Workers discussion",
              xMin: 7.65632476879657,
              xMax: 11.406361390247952,
              yMin: 76.74830808894618,
              yMax: 85.22755756078347,
            },
            {
              name: "Train",
              xMin: 83.65706696354457,
              xMax: 90.40713288215705,
              yMin: 35.03956744369248,
              yMax: 48.78970172234755,
            },
            {
              name: "Spool of wires",
              xMin: 5.0312991337806034,
              xMax: 7.531323548081524,
              yMin: 75.60246356572493,
              yMax: 80.64417946789845,
            },
            {
              name: "Warning sign",
              xMin: 4.656295471635465,
              xMax: 5.78130645807088,
              yMin: 32.28954058796147,
              yMax: 35.49790525298099,
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
              xMin: 57.25111818590207,
              xMax: 59.75116701498077,
              yMin: 12.740358792566334,
              yMax: 19.844594836538118,
            },
            {
              name: "Clock Watcher",
              xMin: 45.750223389762645,
              xMax: 46.625227662244445,
              yMin: 11.503996992185052,
              yMax: 12.878998111163828,
            },
            {
              name: "Yellow bin",
              xMin: 86.87669681048458,
              xMax: 92.12679935154984,
              yMin: 53.99076162853153,
              yMax: 67.28255809789809,
            },
            {
              name: "Notebook",
              xMin: 14.650114005439552,
              xMax: 20.650160697697442,
              yMin: 58.07098203567352,
              yMax: 62.42515985863637,
            },
            {
              name: "Clock",
              xMin: 47.150366921836456,
              xMax: 48.90038054041167,
              yMin: 3.208341553762094,
              yMax: 6.645850361364337,
            },
            {
              name: "Green Basin",
              xMin: 87.67669681048458,
              xMax: 98.55154060865973,
              yMin: 15.715143732725298,
              yMax: 22.819328601769934,
            },
          ],
        },
        {
          url: "https://res.cloudinary.com/dguc111bs/image/upload/v1775732171/WhatsApp_Image_2026-04-09_at_13.34.04_hqibvv.jpg",
          order: 2,
          characters: [
            {
              name: "Brain",
              xMin: 73.12642825055177,
              xMax: 92.0017969100959,
              yMin: 58.57413972141655,
              yMax: 87.90775951588069,
            },

            {
              name: "Skeleton",
              xMin: 75.00146487236079,
              xMax: 7.00013672142034,
              yMin: 15.490385648297347,
              yMax: 56.05328177032979,
            },
            {
              name: "Human torso",
              xMin: 43.750854508877124,
              xMax: 56.50110353717847,
              yMin: 3.802771511440541,
              yMax: 58.8033086260608,
            },
            {
              name: "Heart Diagram",
              xMin: 78.50153323307096,
              xMax: 90.12676028828688,
              yMin: 1.2819135603537795,
              yMax: 49.178214631002254,
            },
            {
              name: "Surgical gloves",
              xMin: 26.62552002968808,
              xMax: 29.500576183128574,
              yMin: 45.05317434740574,
              yMax: 50.55322805886776,
            },
            {
              name: "Syrenge",
              xMin: 50.37598390593566,
              xMax: 52.50102541065255,
              yMin: 86.99108389730369,
              yMax: 96.15784008307373,
            },
            {
              name: "Cranium",
              xMin: 16.625324713373307,
              xMax: 19.500380866813805,
              yMin: 86.07440827872668,
              yMax: 93.86615103663122,
            },
            {
              name: "Dr lisa",
              xMin: 53.00103517646829,
              xMax: 56.12609621281666,
              yMin: 8.156980699681313,
              yMax: 20.761270455115122,
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
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
