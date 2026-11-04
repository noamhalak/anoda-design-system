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
  ActionBanner,
  ActiveFilterChip,
  BookCard,
  DetailHeader,
  EmptyState,
  EventCard,
  ExpertItem,
  FeatureBanner,
  Footer,
  InfoBanner,
  InfoCard,
  PortfolioCard,
  SalaryCard,
  ShareRow,
  StudyProgramCard,
  TeamCard,
  Toggle,
  TopToolItem,
  TopToolsStrip,
  TrendBadge,
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


          <PageHeaderBanner icon="briefcase" title="תיקי עבודות" description="מאגר תיקי עבודות של אנשי מקצוע מתחום חווית המשתמש בישראל" action={<Button variant="secondary" icon="suggest">הגשת תיק עבודות</Button>} />
          <FeatureBanner title="מנטורינג לבניית תיק עבודות" badge="חינם" action={<Button variant="secondary" icon="arrow-left">הצטרפות לתוכנית</Button>}>
            צריכים עזרה בבניית תיק עבודות? נסו את תוכנית המנטורינג של Startup Designers.
          </FeatureBanner>
          <div className="pg-grid">
            <PortfolioCard name="Daniel gur arye" experience="2-4 שנות ניסיון" builtWith="Claude Code" tags={['עיצוב', 'אפיון', 'בינה מלאכותית']} href="#" externalHref="https://www.anoda.co.il" />
            <PortfolioCard type="cv" name="Eden Basri" experience="0-2 שנות ניסיון" tags={['עיצוב', 'מחקר']} href="#" />
            <InfoCard href="#" title="Kombai" description="Kombai הוא כלי AI שעוזר לעצב ולבנות ממשקים." meta="גרסא חינמית" />
          </div>
          <EventCard promoted title="ProductX 2026" source="ProductX" date="29 ב- דצמבר" time="09:00" location="פיזי + אונליין" price="החל מ- 880 ₪" href="#" />
          <EventCard title="מעגלי שיח בסילברפורט" source="WDYT" date="08 ב- נובמבר" time="18:00" location="אירוע פיזי" price="חינם" href="#" />
          <div className="pg-cols2">
            <BookCard title="מעבר לפיקסלים – צגים, תצוגות, UX והנדסת אנוש" description="כיצד העין האנושית מפרשת צבע על גבי מסך?" author="Ofer Moran, Ph.D." meta="2024 • מודפס • דיגיטלי" tags={['פסיכולוגיה', 'נגישות']} href="#" />
            <StudyProgramCard title="AI Product Design Masterclass" school="ux.ui.dan" kind="קורס" location="אונליין" admission="יש תנאי קבלה" discount tags={['עיצוב', 'כלים']} href="#" />
          </div>
          <SectionCard>
            <SectionHeader icon="info" title="סקר שכר 2026" subtitle="UXI LIVE" />
            <div className="pg-grid">
              <SalaryCard role="🖋️ מעצב.ת מוצר" roleEn="Product Designer" salary="₪25,955" trend="up" change="3.4% ↑" />
              <SalaryCard role="🐥 מעצב.ת ג׳וניור" roleEn="Junior PD" salary="₪11,873" trend="down" change="13% ↓" />
              <SalaryCard role="🧩 דיזיין סיסטם" roleEn="Design System" salary="₪24,381" trend="new" change="חדש" />
            </div>
          </SectionCard>
          <TopToolsStrip>
            {['Figma', 'Miro', 'lovable', 'Mixpanel', 'Framer', 'Mobbin'].map((n) => <TopToolItem key={n} name={n} href="#" />)}
          </TopToolsStrip>
          <SectionCard>
            <InfoBanner>💡 anoda - לעלות / להתרומם (ביוונית - ανοδα)</InfoBanner>
            <div className="pg-grid">
              <TeamCard name="עומר אבירם" job="מעצב מוצר" company="Similarweb" bio="מעל 7 שנות ניסיון בעבודה בחברות מוצר." linkedin="https://www.linkedin.com" email="anoda.ux@gmail.com" />
              <ExpertItem name="טל סולומון" org="MTA, Riskified" />
            </div>
          </SectionCard>
          <div className="pg-detail">
            <DetailHeader breadcrumb="תוכן / פוסטים ומאמרים" title="עיצוב תנועה ואנימציות בעידן של סוכני AI" source="The Portfolio Club" meta="3 דק׳ • 18.10.26 • 🇮🇱" />
            <div className="pg-detail-body">
              <ActionBanner action={<IconButton variant="primary-gradient" icon="external-link" label="פתיחה במקור" />}>לקריאת הפוסט</ActionBanner>
              <ShareRow url="https://www.anoda.co.il" />
            </div>
          </div>
          <div className="pg-row">
            <ActiveFilterChip>בינה מלאכותית</ActiveFilterChip>
            <Toggle>הנחות</Toggle>
            <Toggle defaultChecked>התמחות</Toggle>
            <TrendBadge trend="up">3.4% ↑</TrendBadge>
          </div>
          <EmptyState />
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
          <Footer categories={[{ label: 'בינה מלאכותית', href: '#' }, { label: 'עיצוב', href: '#' }, { label: 'מחקר', href: '#' }, { label: 'נגישות', href: '#' }]} />
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
