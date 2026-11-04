import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/styles/base.css';
import './playground.css';
import {
  Badge,
  Button,
  Checkbox,
  ContentCard,
  ContentListItem,
  DropdownField,
  IconButton,
  InputField,
  PageHeaderBanner,
  SearchField,
  SectionCard,
  SectionHeader,
  SideNavigation,
  SideNavLink,
  SourceTypeLabel,
  TabButton,
  Tag,
  TopNavigation,
} from '../src';

const cards = [
  { title: 'עיצוב תנועה ואנימציות בעידן של סוכני AI', sourceName: 'The Portfolio Club', meta: '3 דק׳ • 18.10.26 • 🇮🇱', description: 'אחד הנושאים החמים היום בעבודה עם סוכני AI הוא יצירת מושן ואנימציות.' },
  { title: 'Portfolio review #2', sourceName: 'The Portfolio Club', meta: '2 דק׳ • 18.9.26 • 🇮🇱', description: 'סקירת תיקי עבודות בשידור חי עם מעצבים מובילים.' },
  { title: 'Designing for trust: how AI-native products earn (and lose) their users’ confidence over time', sourceName: 'UX Collective', meta: '12 min • 2.10.26 • 🇺🇸', description: 'A long English title to check the two-line clamp in an RTL layout.' },
  { title: 'המדריך המלא לבניית תיק עבודות שמושך מגייסים — מהמחקר הראשוני ועד הצגת התהליך בראיון', sourceName: 'Nielsen Norman Group — UX Research & Training', meta: '5 דק׳ • 11.11.25 • 🇮🇱' },
];

function Playground() {
  const [menu, setMenu] = useState(false);
  const [tab, setTab] = useState('posts');
  return (
    <div className="pg-shell">
      <TopNavigation fixed onMenuClick={() => setMenu((m) => !m)} />
      <div className="pg-body">
        <SideNavigation
          className="pg-side"
          open={menu}
          footer={<SideNavLink icon="info" href="#">אודות</SideNavLink>}
        >
          <SideNavLink icon="home" href="#" current>בית</SideNavLink>
          <SideNavLink icon="article" href="#" expandable>תכנים</SideNavLink>
          <SideNavLink icon="briefcase" href="#">תיקי עבודות</SideNavLink>
          <SideNavLink icon="cv" href="#">קורות חיים</SideNavLink>
          <SideNavLink icon="calendar" href="#">אירועים</SideNavLink>
          <SideNavLink icon="school" href="#">מסלולי לימוד</SideNavLink>
          <SideNavLink icon="tools" href="#">כלים</SideNavLink>
          <SideNavLink icon="book" href="#">ספרים</SideNavLink>
          <SideNavLink icon="users" href="#">מקורות</SideNavLink>
          <SideNavLink icon="info" href="#" badge="2026">נתוני שכר</SideNavLink>
          <SideNavLink icon="tag" disabled>בקרוב</SideNavLink>
        </SideNavigation>

        <main className="pg-main">
          <section className="pg-hero">
            <span className="anoda-h5">כל מה שצריך לדעת על</span>
            <h1 className="anoda-display">חווית משתמש,<br />במקום אחד</h1>
            <SearchField surface="on-hero" />
            <div className="pg-row">
              <Button variant="on-purple" icon="sparkle">בינה מלאכותית</Button>
              <Button variant="on-purple" icon="briefcase">חיפוש עבודה וראיונות</Button>
              <Button variant="on-purple" icon="school">ג׳וניורים</Button>
            </div>
          </section>

          <SectionCard>
            <SectionHeader icon="calendar" title="מתי נפגשים?" subtitle="אירועים, מיטאפים, וובינרים וכנסים של קהילות מובילות" onAction={() => {}} />
            <div className="pg-grid">
              {cards.map((c) => (
                <ContentCard key={c.title} {...c} href="#" externalHref="https://www.anoda.co.il" />
              ))}
            </div>
          </SectionCard>

          <SectionCard>
            <SectionHeader icon="article" title="כאן מתעדכנים" subtitle="כל התכנים הכי מעודכנים בתחום חווית המשתמש" />
            <div className="pg-cols" role="tablist">
              {[['posts', 'פוסטים ומאמרים', 'article'], ['podcasts', 'פודקאסטים', 'mic'], ['videos', 'סרטונים', 'play']].map(([id, label, icon]) => (
                <div className="pg-col" key={id}>
                  <TabButton icon={icon as 'article'} current={tab === id} onClick={() => setTab(id)}>{label}</TabButton>
                  <ContentListItem href="#" title="עיצוב תנועה ואנימציות בעידן של סוכני AI" meta="18.10.26 • The Portfolio Club" />
                  <ContentListItem href="#" title="Portfolio review #2" meta="18.9.26 • The Portfolio Club" />
                </div>
              ))}
            </div>
          </SectionCard>

          <PageHeaderBanner icon="article" title="כל התכנים" description="כל התכנים ממקורות מובילים בתחום • יש תוכן שלא נמצא במאגר? הציעו תוכן למאגר" />
          <div className="pg-filters">
            <InputField icon="search" placeholder="חיפוש" />
            <DropdownField defaultValue=""><option value="">קטגוריה</option><option>בינה מלאכותית</option></DropdownField>
            <DropdownField defaultValue=""><option value="">סוג תוכן</option><option>פודקאסט</option></DropdownField>
            <Button variant="ghost-neutral">נקה</Button>
          </div>

          <SectionCard className="pg-gallery">
            <h2 className="anoda-h5">Components</h2>
            <div className="pg-row">
              {(['primary', 'primary-gradient', 'secondary', 'secondary-grey', 'light-purple', 'outline', 'ghost-purple', 'ghost-neutral'] as const).map((v) => (
                <Button key={v} variant={v} icon="suggest">{v}</Button>
              ))}
              <Button disabled>disabled</Button>
            </div>
            <div className="pg-purple">
              <Button variant="on-purple" icon="suggest">on-purple</Button>
              <IconButton variant="on-purple" icon="arrow-left" label="הבא" />
            </div>
            <div className="pg-row">
              <IconButton icon="arrow-left" label="לכל התכנים" />
              <IconButton variant="primary-gradient" icon="external-link" label="פתיחה" />
              <IconButton variant="ghost-neutral" icon="share" label="שיתוף" />
            </div>
            <div className="pg-row">
              <Tag href="#" icon="tag">בינה מלאכותית</Tag>
              <Tag href="#" icon="tag" size="lg">Wireframe</Tag>
              <Tag href="#">העצמת משתמשים ועיצוב ממוקד משתמש (UCD)</Tag>
              <Badge>2026</Badge>
              <SourceTypeLabel>פודקאסט</SourceTypeLabel>
            </div>
            <div className="pg-row">
              <Checkbox defaultChecked>בינה מלאכותית</Checkbox>
              <Checkbox>אפיון</Checkbox>
            </div>
          </SectionCard>
        </main>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Playground />
  </StrictMode>,
);
