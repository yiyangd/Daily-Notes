# Short-Notes

### HTML

### CSS

### DATABASE

#### 1. Create SAPABASE

### React

#### Node.js

#### JSX and Creating the App Component

npx create-react-app

#### Dividing

### 62. Loading Data From Supabase with useEffect

API Docs => Introduction

```bash
npm install @supabase/supabase-js
```

Copy code under INITIALIZING and paste to a created `src/supabase.js`

```js
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tpbvqnlhvpnzfiglarib.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
```

Settings => Data API

- Copy `anon` `public` Project API Key to replace `process.env.SUPABASE_KEY` above

API Docs => `notes` under `TABLES AND VIEWS`

- copy `SELECT ID` and paste in `useEffect()` function in `App.js`

```js
useEffect(function () {
  async function getFacts() {
    let { data: notes, error } = await supabase.from("notes").select("*");
    setFacts(notes);
  }
  getFacts();
}, []);
```

### Upload a Data to Supabase

### Production build

```bash
$ npm run build
```
