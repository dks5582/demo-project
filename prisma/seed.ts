import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const userid = await prisma.$executeRawUnsafe(`INSERT INTO public."user" (name,email,password) 
  //                    VALUES('Dharmendra','abc@gmail.com','abc@2024') RETURNING id`);
  //   console.log(userid);
  //   const updateid = await prisma.$executeRawUnsafe(`update public."user" set createdbyid = ${userid} where id = ${userid}`);
  //   console.log(updateid);

  //  console.log(userid);
    
  const user1 = await prisma.user.upsert({
        where: { email: 'abc@gmail.com' },
        update: {},
        create: {
          email: 'abc@gmail.com',
          name: 'Dharmendra',
          password: 'abc@2024',
          //createdbyid: user1.id,
        },
      });
    
const country = await prisma.country.upsert({
        where: { name: 'India' },
        update: {},
        create: {
          name: 'India',
          createdbyid: user1.id,
        },
      });    

const state1 = await prisma.state.upsert({
        where: { name: 'Gujarat' },
        update: {},
        create: {
          name: 'Gujarat',
          countryid: country.id,
          createdbyid: user1.id,
        },
      }); 

const state2 = await prisma.state.upsert({
        where: { name: 'Bihar' },
        update: {},
        create: {
          name: 'Bihar',
          countryid: country.id,
          createdbyid: user1.id,
        },
      }); 

const city1 = await prisma.city.upsert({
        where: { name: 'Surat' },
        update: {},
        create: {
          name: 'Surat',
          countryid: country.id,
          stateid: state1.id,
          createdbyid: user1.id,
        },
      }); 

const city2 = await prisma.city.upsert({
        where: { name: 'Vadodara' },
        update: {},
        create: {
          name: 'Vadodara',
          countryid: country.id,
          stateid: state1.id,
          createdbyid: user1.id,
        },
      }); 

const city3 = await prisma.city.upsert({
        where: { name: 'Patna' },
        update: {},
        create: {
          name: 'Patna',
          countryid: country.id,
          stateid: state2.id,
          createdbyid: user1.id,
        },
      });


      console.log({user1, country, state1, state2, city1, city2, city3});
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });