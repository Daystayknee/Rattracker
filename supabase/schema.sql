create table if not exists rats (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  sex text not null check (sex in ('Doe', 'Buck', 'Unknown')),
  dob date,
  color text,
  coat_type text,
  weight numeric(7,2),
  status text not null default 'Active',
  temperament text,
  lineage text,
  notes text,
  image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists litters (
  id uuid primary key default gen_random_uuid(),
  mother_id uuid references rats(id) on delete set null,
  father_id uuid references rats(id) on delete set null,
  birth_date date,
  litter_size integer not null default 0 check (litter_size >= 0),
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  due_date date,
  completed boolean not null default false,
  rat_id uuid references rats(id) on delete cascade,
  created_at timestamptz not null default now()
);

create index if not exists idx_litters_mother_id on litters(mother_id);
create index if not exists idx_litters_father_id on litters(father_id);
create index if not exists idx_tasks_rat_id on tasks(rat_id);
create index if not exists idx_tasks_due_date on tasks(due_date);
