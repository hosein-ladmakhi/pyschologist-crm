'use client';

import Button from '@/ui/kit/Button';
import Pagination from '@/ui/kit/Pagination';
import Table from '@/ui/kit/Table';
import { TColumns, TRows } from '@/ui/kit/Table/index.type';

const columns: TColumns = [
  {
    label: 'شناسه',
    width: 20,
    name: 'id',
  },
  {
    label: 'نام',
    width: 150,
    name: 'firstName',
  },
  {
    label: 'توضیحات',
    name: 'bio',
  },
  {
    label: 'عملیات',
    width: 320,
    name: 'action',
  },
];

const rows: TRows = [
  {
    id: 1,
    firstName: 'حسین',
    bio: '            سلام حسین لادمخی نژاد هستم متولد سال 1381 و متولد رشت و اردیبهشت 1403 اعزامم الهی به امید تو',
    action: (
      <div className="w-fit flex justify-center items-center gap-4">
        <Button size="sm" variant="main">
          نمایش جزئیات
        </Button>
        <Button size="sm" variant="error">
          حذف
        </Button>
        <Button size="sm" variant="primary">
          ویرایش
        </Button>
      </div>
    ),
  },
  {
    id: 2,
    firstName: 'آتنا',
    bio: '            سلام حسین لادمخی نژاد هستم متولد سال 1381 و متولد رشت و اردیبهشت 1403 اعزامم الهی به امید تو',
    action: (
      <div className="w-fit flex justify-center items-center gap-4">
        <Button size="sm" variant="main">
          نمایش جزئیات
        </Button>
        <Button size="sm" variant="error">
          حذف
        </Button>
        <Button size="sm" variant="primary">
          ویرایش
        </Button>
      </div>
    ),
  },
  {
    id: 3,
    firstName: 'محمد',
    bio: '            سلام حسین لادمخی نژاد هستم متولد سال 1381 و متولد رشت و اردیبهشت 1403 اعزامم الهی به امید تو',
    action: (
      <div className="w-fit flex justify-center items-center gap-4">
        <Button size="sm" variant="main">
          نمایش جزئیات
        </Button>
        <Button size="sm" variant="error">
          حذف
        </Button>
        <Button size="sm" variant="primary">
          ویرایش
        </Button>
      </div>
    ),
  },
  {
    id: 4,
    firstName: 'ترگل',
    bio: '            سلام حسین لادمخی نژاد هستم متولد سال 1381 و متولد رشت و اردیبهشت 1403 اعزامم الهی به امید تو',
    action: (
      <div className="w-fit flex justify-center items-center gap-4">
        <Button size="sm" variant="main">
          نمایش جزئیات
        </Button>
        <Button size="sm" variant="error">
          حذف
        </Button>
        <Button size="sm" variant="primary">
          ویرایش
        </Button>
      </div>
    ),
  },
];

const MainPage = () => {
  return (
    <div className="container my-20">
      <Table size="xs" rows={rows} columns={columns} />
      <Pagination variant="error" />
    </div>
  );
};

export default MainPage;
