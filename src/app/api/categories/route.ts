import { NextResponse } from 'next/server';

export const GET = () => {
  return NextResponse.json({
    content: [
      {
        id: 18,
        faName: 'متخصص خون و آنکولوژی (سرطان)',
        enName: 'Hematologist and oncologist (cancer)',
        icon: '1708153998835-2001898.svg',
      },
      {
        id: 17,
        faName: 'متخصص بیماری های عفونی',
        enName: 'infectious disease specialist',
        icon: '1708154068254-2086171.svg',
      },
      {
        id: 16,
        faName: 'کلینیک ایمونولوژی و آلرژی (آسم و آلرژی)',
        enName: 'Immunology and Allergy Clinic (Asthma and Allergy)',
        icon: '1708154086521-2017092.svg',
      },
      {
        id: 15,
        faName: 'پزشک عمومی',
        enName: 'General practitioner',
        icon: '1708154105840-2089347.svg',
      },
      {
        id: 14,
        faName: 'متخصص و جراح گوش و حلق و بینی',
        enName: 'Ear, nose and throat specialist and surgeon',
        icon: '1708154148210-2091300.svg',
      },
      {
        id: 13,
        faName: 'جراح مغز و اعصاب',
        enName: 'Neurosurgeon',
        icon: '1708154166991-2041669.svg',
      },
      {
        id: 12,
        faName: 'کلینیک تغذیه و رژیم درمانی',
        enName: 'Nutrition and diet therapy clinic',
        icon: '1708154187617-2089136.svg',
      },
      {
        id: 11,
        faName: 'کلینیک گوارش و کبد',
        enName: 'Gastroenterology and Liver Clinic',
        icon: '1708154257413-2073863.svg',
      },
      {
        id: 10,
        faName: 'کلینیک غدد، رشد و متابولیسم',
        enName: 'Endocrine, Growth and Metabolism Clinic',
        icon: '1708154279941-2027666.svg',
      },
      {
        id: 9,
        faName: 'متخصص و جراح کلیه و مجاری ادراری (ارولوژی)',
        enName: 'Kidney and urinary tract specialist and surgeon (urology)',
        icon: '1708154304156-2033585.svg',
      },
    ],
    count: 18,
  });
};
