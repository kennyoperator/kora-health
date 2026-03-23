export interface Article {
  slug: string
  title: string
  seoTitle: string
  metaDescription: string
  category: string
  readingTime: string
  publishedDate: string
  reviewedBy: string
  reviewedByTitle: string
  excerpt: string
  content: string
  relatedSlugs: string[]
}

export const articles: Article[] = [
  {
    slug: 'retatrutide-weight-loss-results',
    title: 'How Much Weight Can You Lose on Retatrutide? Trial-by-Trial Breakdown',
    seoTitle: 'How Much Weight Can You Lose on Retatrutide? Trial-by-Trial Breakdown',
    metaDescription: 'Retatrutide weight loss numbers broken down by dose and trial — 24.2% in Phase 2, 28.7% in Phase 3, and what affects whether you fall above or below average.',
    category: 'Treatment Guides',
    readingTime: '8 min read',
    publishedDate: '2026-03-26',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt: 'Retatrutide weight loss numbers broken down by dose and trial — what the data shows, what affects individual results, and realistic expectations.',
    relatedSlugs: ['retatrutide-what-to-expect-week-by-week', 'retatrutide-eligibility-bmi-screening', 'retatrutide-vs-ozempic'],
    content: `24.2% in Phase 2. 28.7% in Phase 3. Those numbers are everywhere — in news articles, Reddit threads, and health forums across the Philippines. They are real. They come from published clinical trials. But on their own, they tell you very little about what you personally might experience.

This article gives you the full picture: the specific numbers by dose, the differences between trials, what factors push individual results above or below the average, and what the data means for someone evaluating their weight management options today.

## Phase 2 Results by Dose (NEJM, 2023)

The Phase 2 trial enrolled 338 adults with obesity (BMI ≥30, or ≥27 with a weight-related condition) without type 2 diabetes. Participants were randomized to different doses for 48 weeks. The results show a steep dose-response curve.

At 1mg weekly: 8.7% average body weight lost. At 4mg: 17.1%. At 8mg: 22.8%. At 12mg — the highest dose tested: 24.2%.

For someone starting at 100kg, the 12mg result means approximately 24kg lost over 48 weeks. That is roughly half a kilogram per week, sustained for nearly a year. The jump from 4mg to 12mg — approximately 7 percentage points — underscores why dose optimization under physician guidance matters. A subtherapeutic dose produces subtherapeutic results.

## Phase 3 Results: TRIUMPH-4 (December 2025)

TRIUMPH-4 studied a different and heavier population — 445 adults with obesity AND knee osteoarthritis, average baseline weight 112.7kg (BMI 40.4) — over 68 weeks.

At 9mg: 26.4% average weight loss (approximately 29.1kg / 64.2 lbs). At 12mg: 28.7% (approximately 32.3kg / 71.2 lbs).

The proportion reaching specific thresholds at 12mg: 85.9% lost at least 10% body weight. 74.5% lost at least 15%. 58.6% lost at least 25%. Nearly 6 in 10 participants lost more than a quarter of their body weight.

These are the highest weight loss numbers ever recorded in a Phase 3 trial for any GLP-1 class medication.

For a week-by-week picture of how these results accumulated, see [what to expect during retatrutide treatment](/learn/retatrutide-what-to-expect-week-by-week).

## How Retatrutide Stacks Up

Putting the numbers in context against approved treatments:

Semaglutide (Wegovy) produced approximately 14.9% average weight loss at 68 weeks in STEP-1. Tirzepatide (Zepbound) produced 20.2% at 72 weeks in the SURMOUNT-5 head-to-head trial. Retatrutide's 28.7% in TRIUMPH-4 is approximately 8 points above tirzepatide and 14 points above semaglutide.

These are cross-trial comparisons — different populations, timepoints, and designs — but the magnitude of difference is consistent across every data point.

For the semaglutide-specific comparison, see [how retatrutide compares to Ozempic](/learn/retatrutide-vs-ozempic). For the tirzepatide comparison, see [retatrutide vs tirzepatide](/learn/retatrutide-vs-tirzepatide).

## What Makes Individual Results Vary

Trial averages are population statistics. Where you fall within the distribution depends on several factors.

**Starting BMI matters.** TRIUMPH-4 participants averaged BMI 40.4 — substantially higher than many prospective patients. Higher baseline weight tends to produce larger absolute losses. Someone with BMI 32 will likely see a different percentage than someone at BMI 45, even on the same dose.

**Dose matters — a lot.** Phase 2 showed a 15.5-percentage-point spread between 1mg (8.7%) and 12mg (24.2%). The dose your physician selects, and how well you tolerate escalation, directly shapes your outcome.

**Duration matters.** Weight loss with GLP-1 drugs is progressive over months. The 48-week and 68-week timepoints reflect sustained treatment. Stopping early means stopping the progression.

**Lifestyle is part of the equation.** All trials included diet and physical activity counseling. Participants who actively engaged outperformed those who relied on medication alone. The drug reduces appetite and improves metabolism — but what you eat and how you move still influence the magnitude.

**Individual biology creates variation.** Even within the same dose group, some participants lost 35% while others lost 12%. Genetic, hormonal, and metabolic differences produce real variance.

To assess whether your health profile makes you a likely responder, see [who is a realistic candidate for retatrutide](/learn/retatrutide-eligibility-bmi-screening).

## What "Average" Hides

The 28.7% average in TRIUMPH-4 means roughly half the participants lost more and half lost less. The distribution matters for setting expectations.

At the 12mg dose, 85.9% achieved at least 10% weight loss — meaning the overwhelming majority hit clinically meaningful territory. But 14.1% did not reach that threshold. Approximately 1 in 7 had a more modest response.

A physician does not just prescribe the medication. They manage the dose, monitor the response, and adjust the plan based on what is actually happening — which is how you maximize your probability of falling on the favorable side of the distribution.

## The Availability Reality

These results come from a drug still in Phase 3 trials. Retatrutide is not approved. Not available. Not prescribable.

The treatment with the strongest available evidence today is tirzepatide — 20.2% average weight loss in a direct head-to-head trial, FDA-approved, Philippine FDA-approved, accessible through licensed physicians right now.

For how the dosing protocol works in practice, see [retatrutide dose escalation explained](/learn/retatrutide-dose-escalation-schedule).`
  },
  {
    slug: 'retatrutide-what-to-expect-week-by-week',
    title: 'Retatrutide Week by Week: What to Expect From Dose Escalation to Results',
    seoTitle: 'Retatrutide Week by Week: What to Expect From Dose Escalation to Results',
    metaDescription: 'Week-by-week timeline of retatrutide treatment from clinical trials — when appetite changes, when weight loss starts, when side effects peak, and when they fade.',
    category: 'Treatment Guides',
    readingTime: '7 min read',
    publishedDate: '2026-03-26',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt: 'Week-by-week breakdown of what happens on retatrutide — appetite changes, dose escalation, weight loss progression, and side effect timing from clinical trials.',
    relatedSlugs: ['retatrutide-weight-loss-results', 'retatrutide-dose-escalation-schedule', 'retatrutide-eligibility-bmi-screening'],
    content: `You understand retatrutide's mechanism and you have seen the endpoint numbers. What you want to know now is more practical: what does it actually feel like, week by week? When does appetite change? When does weight loss start showing? When do side effects hit — and when do they ease up?

The clinical trials provide a clear picture of the treatment arc. Here is the typical progression based on the Phase 2 and TRIUMPH Phase 3 data — with the caveat that individual experiences will vary.

## Weeks 1–4: Starting Dose (2mg)

Every retatrutide trial protocol started at 2mg once weekly. This is not the therapeutic dose — it is the floor. The purpose is to let the body adjust before escalating.

What participants typically reported during this phase: appetite begins to shift — not dramatically, but noticeably. The mental preoccupation with food (sometimes called "food noise") starts to quiet. Portions naturally shrink because satiety arrives sooner. Gastrointestinal effects at this dose are mild for most — occasional nausea, slight digestive changes. Weight loss is modest. Primarily driven by eating less without trying to eat less.

This phase sets the physiological foundation. The real changes come during escalation.

For a detailed breakdown of the dosing protocol, see [retatrutide dose escalation explained](/learn/retatrutide-dose-escalation-schedule).

## Weeks 5–12: Dose Escalation (4mg → 6mg → 9mg)

The dose increases every 4 weeks in a stepwise fashion. Each increase amplifies the metabolic effect — and each is where GI side effects are most likely to appear.

What participants typically reported: weight loss accelerates noticeably with each dose step. Appetite suppression deepens — many describe feeling satisfied with half their previous portions. Nausea peaks during this window. In TRIUMPH-4, the 43% nausea rate was concentrated in these escalation weeks. Diarrhea, constipation, and changes in bowel patterns are most common here. Energy may fluctuate — eating significantly less while the body adjusts can cause temporary fatigue.

This is where physician oversight provides the most value. A doctor monitoring your response can hold you at a lower dose for an extra 2–4 weeks if side effects are uncomfortable. That flexibility — spending 6 weeks at 4mg instead of 4 — often makes the difference between tolerating the escalation and discontinuing.

To understand whether your health profile is suited for this treatment approach, see [who is a realistic candidate for retatrutide](/learn/retatrutide-eligibility-bmi-screening).

## Weeks 13–24: Therapeutic Dose Established

By approximately week 13–16, most participants had reached their target dose (9mg or 12mg). The full metabolic effect is now in place.

What participants typically reported: steady, measurable weight loss — roughly 1–2% of body weight per month. GI side effects stabilize and often improve substantially. Appetite regulation becomes the new normal rather than a noticeable drug effect. Blood work markers — fasting glucose, cholesterol, blood pressure — begin shifting in measurable ways. Physical changes become visible. Clothes fit differently. Movement feels easier.

In the Phase 2 trial, participants on 12mg had already lost approximately 17% of body weight by 24 weeks — exceeding what most approved medications achieve at their full endpoints.

## Weeks 24–48+: Continued Progression

Weight loss continued past 24 weeks in every trial. The trajectory slows gradually as the body approaches a new equilibrium — but it does not stop.

Phase 2 showed ongoing progression from 17% at 24 weeks to 24.2% at 48 weeks. TRIUMPH-4 showed 28.7% at 68 weeks. The treatment transitions from rapid loss to deceleration to plateau — a pattern consistent across all GLP-1 class medications.

This phase is about consolidation: locking in metabolic improvements, establishing sustainable eating patterns, and working with a physician on long-term maintenance planning.

For the full breakdown of weight loss at each timepoint, see [how much weight you can lose on retatrutide](/learn/retatrutide-weight-loss-results).

## The Side Effect Arc

Side effects follow a predictable curve.

**Weeks 1–4 (low dose):** Mild. Most tolerate this without difficulty.

**Weeks 5–12 (escalation):** This is the peak window. Nausea, digestive changes, and appetite adjustment are strongest here. The dysesthesia signal from TRIUMPH-4 (skin tingling/sensitivity in ~21% of participants at the highest dose) also appeared during this period. Importantly, most side effects in this window are manageable — and they serve as data points for your physician to calibrate your escalation speed.

**Weeks 13+ (maintenance):** Side effects diminish. The body adjusts. Most participants who made it through escalation continued treatment without significant tolerability issues.

The takeaway: weeks 5–12 are the hardest. They are also temporary. And they are dramatically easier to navigate with a physician managing your dose schedule than without one.

## What This Means for Treatment Available Today

Retatrutide is not available. Tirzepatide follows a comparable treatment arc — same once-weekly injection, same gradual escalation, same side effect pattern, same progressive weight loss curve. Patients who start tirzepatide now experience a journey that directly parallels what retatrutide treatment would look like.

For the Ozempic comparison, see [how retatrutide compares to semaglutide](/learn/retatrutide-vs-ozempic).`
  },
  {
    slug: 'retatrutide-eligibility-bmi-screening',
    title: 'Are You Eligible for Retatrutide? BMI Requirements, Screening & Who Qualifies',
    seoTitle: 'Are You Eligible for Retatrutide? BMI Requirements, Screening & Who Qualifies',
    metaDescription: 'Retatrutide eligibility criteria from clinical trials — BMI thresholds, medical screening, contraindications, and how to find out if GLP-1 treatment is right for you.',
    category: 'Weight Management',
    readingTime: '7 min read',
    publishedDate: '2026-03-26',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt: 'BMI requirements, medical screening criteria, contraindications — who is and is not a fit for retatrutide, and how to find out through a physician.',
    relatedSlugs: ['retatrutide-weight-loss-results', 'retatrutide-dose-escalation-schedule', 'retatrutide-what-to-expect-week-by-week'],
    content: `You have read the results. You are interested. Now the question that determines whether any of it matters: do you qualify?

The clinical trials used specific eligibility criteria — and any future prescribing guidelines will follow similar thresholds. Understanding them now helps you evaluate whether GLP-1 treatment is worth pursuing with a physician, whether the medication in question is retatrutide in the future or tirzepatide today.

## The BMI Threshold

Based on TRIUMPH trial inclusion criteria and the prescribing labels of approved GLP-1 medications (tirzepatide, semaglutide), the expected eligibility profile is:

Adults with a **BMI of 30 or higher** (obesity). OR adults with a **BMI of 27 or higher** with at least one weight-related health condition — type 2 diabetes, hypertension, dyslipidemia, cardiovascular disease, or obstructive sleep apnea.

In the Philippines, where approximately 38.6% of adults aged 20–59 are classified as overweight or obese, the eligible population is large. But BMI alone does not determine candidacy. It is the starting threshold, not the complete picture.

## What a Physician Actually Evaluates

A proper medical screening goes well beyond BMI.

**Medical history review.** Chronic conditions, current medications, previous weight loss treatments (including what has and has not worked), surgical history, and family medical history — particularly thyroid cancer and MEN 2 syndrome.

**Contraindication screening.** The conditions listed below that rule out GLP-1 treatment entirely.

**Lab work (when clinically indicated).** Fasting glucose or HbA1c, thyroid function panel, liver function, kidney function, lipid panel. Not every patient requires full labs — your physician determines what is needed based on your history.

**Psychological readiness and goal alignment.** Are your expectations realistic? Are you prepared for weekly injections and regular follow-up? Are you planning pregnancy in the near future?

**Current medication review.** GLP-1 drugs interact with some medications — particularly insulin and sulfonylureas (hypoglycemia risk). Your physician evaluates these interactions.

This is not a checklist exercise. It is clinical judgment applied to your individual circumstances. Two people with identical BMIs may receive different recommendations based on everything above.

## Who Should NOT Take Retatrutide

These are firm contraindications — conditions that disqualify a person from GLP-1 treatment.

**Personal or family history of medullary thyroid carcinoma (MTC).** The most critical exclusion. All GLP-1 class drugs carry a boxed warning based on thyroid C-cell tumors in animal studies.

**Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).**

**Pregnancy, planned pregnancy, or breastfeeding.** GLP-1 drugs are not studied in pregnant populations.

**Type 1 diabetes.** GLP-1 drugs are not appropriate for type 1 diabetes management.

**Known hypersensitivity** to the compound or its components.

**History of severe acute pancreatitis.** Physicians exercise significant caution here.

Additional caution applies for patients with gastroparesis, significant kidney impairment, or active gallbladder disease.

For the full safety data including the dysesthesia signal, see [retatrutide safety and side effects](/learn/is-retatrutide-safe).

## The Self-Qualification Trap

Reading eligibility criteria online — including in this article — can create false certainty in either direction. People with BMI 28 may assume they do not qualify when a physician would consider them eligible given their comorbidities. People with BMI 35 may assume they are automatic candidates when a thyroid history disqualifies them.

Self-qualification from an article is not a medical evaluation. The information here helps you understand the general framework. A physician determines whether that framework applies to you specifically.

## What If You Qualify but Retatrutide Is Not Available?

If you meet the eligibility criteria for retatrutide, you almost certainly meet the criteria for tirzepatide — the thresholds overlap significantly. Starting treatment now means building the medical history, treatment response data, and physician relationship that will directly inform whether transitioning to retatrutide is appropriate when it eventually becomes available.

For a comparison of expected results, see [retatrutide weight loss data by dose and trial](/learn/retatrutide-weight-loss-results).

For the practical dosing protocol, see [how retatrutide dose escalation works](/learn/retatrutide-dose-escalation-schedule).`
  },
  {
    slug: 'retatrutide-vs-ozempic',
    title: 'Retatrutide vs Ozempic (Semaglutide): Triple Agonist vs Single Agonist Compared',
    seoTitle: 'Retatrutide vs Ozempic (Semaglutide): Triple Agonist vs Single Agonist Compared',
    metaDescription: 'How retatrutide compares to semaglutide/Ozempic — three receptors vs one, weight loss data, side effect differences, and what the gap means for your decision.',
    category: 'Comparisons',
    readingTime: '7 min read',
    publishedDate: '2026-03-26',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt: 'How retatrutide compares to Ozempic/semaglutide — triple agonist vs single agonist mechanism, weight loss data, side effects, and availability.',
    relatedSlugs: ['retatrutide-weight-loss-results', 'retatrutide-eligibility-bmi-screening', 'retatrutide-dose-escalation-schedule'],
    content: `Ozempic is the GLP-1 medication most Filipinos have heard of. It started the entire weight loss injection conversation. Semaglutide — the molecule behind both Ozempic (for diabetes) and Wegovy (for weight management) — remains the most recognized option in the Philippine market.

Retatrutide is the next evolutionary step: three receptor pathways instead of one, with clinical results that show a substantial performance gap. Here is what the comparison looks like when you move past the brand names and examine the mechanism, data, and practical implications.

## Three Receptors vs One

**Semaglutide** is a single GLP-1 receptor agonist. One metabolic pathway — appetite suppression, slower gastric emptying, improved insulin secretion. Effective. Well-studied. But limited to a single lever.

**Retatrutide** activates GLP-1, GIP, and glucagon receptors simultaneously. Everything semaglutide does, plus GIP (enhanced insulin sensitivity, improved fat metabolism) and glucagon (increased resting energy expenditure, accelerated liver fat clearance).

The mechanism gap here is larger than between retatrutide and tirzepatide. Tirzepatide already uses two of the three pathways. Semaglutide uses one.

For the tirzepatide-specific comparison, see [retatrutide vs tirzepatide](/learn/retatrutide-vs-tirzepatide).

## The Weight Loss Gap

**Semaglutide (STEP-1, 2021):** 14.9% average body weight loss at 68 weeks, at the 2.4mg dose, in adults with obesity without diabetes.

**Semaglutide in head-to-head (SURMOUNT-5, 2025):** 13.7% at 72 weeks — when directly compared to tirzepatide in the same trial.

**Retatrutide (Phase 2, NEJM 2023):** 24.2% at 48 weeks, at the 12mg dose.

**Retatrutide (TRIUMPH-4, December 2025):** 28.7% at 68 weeks, at the 12mg dose.

The gap is approximately 14 percentage points. For someone weighing 100kg, that is the difference between losing ~14kg on semaglutide and ~28kg on retatrutide over a similar timeframe.

Cross-trial comparisons carry limitations — different populations, designs, and timepoints. But the magnitude is consistent and likely reflects a genuine pharmacological advantage.

For the detailed breakdown of retatrutide results by dose, see [retatrutide weight loss numbers by trial](/learn/retatrutide-weight-loss-results).

## Side Effect Comparison

Both share the GLP-1 class gastrointestinal profile. The rates are more similar than you might expect.

**Nausea:** Retatrutide TRIUMPH-4: ~43%. Semaglutide STEP-1: ~44%. Comparable — suggesting GI tolerability is driven primarily by GLP-1 activation, which both drugs share.

**Diarrhea:** Retatrutide: ~33%. Semaglutide: ~30%. Similar.

**Vomiting:** Retatrutide: ~21%. Semaglutide: ~25%. Similar.

The key distinguishing factor is **dysesthesia** — skin tingling/sensitivity reported in ~21% of retatrutide participants at the highest dose. Not observed with semaglutide. Likely related to the glucagon receptor pathway unique to retatrutide. Generally mild, but a genuinely new consideration.

The other notable difference: some TRIUMPH-4 participants discontinued due to "perceived excessive weight loss." This was not reported in semaglutide trials — consistent with the much larger magnitude of weight loss.

## Availability in the Philippines

**Semaglutide** has the broadest access of any GLP-1 medication in the Philippine market. Branded Ozempic is stocked at many pharmacies. Compounded semaglutide is widely available through telehealth providers at lower price points.

**Retatrutide** is not available through any legitimate channel. Phase 3 trials are ongoing. Approval is projected for 2027–2028. Products marketed as retatrutide from peptide vendors or social media are unverified.

**Tirzepatide** sits between them — more effective than semaglutide (20.2% vs 13.7% in head-to-head), available in the Philippines, and the strongest approved option today.

## What This Comparison Means Practically

If you are choosing between medications you can access today, the relevant comparison is semaglutide vs tirzepatide. Tirzepatide outperforms semaglutide in head-to-head data and is available through physician-led platforms.

Retatrutide represents the future frontier. The data is compelling. But it does not factor into a treatment decision you can make today.

To understand whether you meet the eligibility criteria for GLP-1 treatment, see [who qualifies for retatrutide](/learn/retatrutide-eligibility-bmi-screening).`
  },
  {
    slug: 'retatrutide-dose-escalation-schedule',
    title: 'Retatrutide Dose Escalation: How the Injection Schedule Works in Clinical Trials',
    seoTitle: 'Retatrutide Dose Escalation: How the Injection Schedule Works in Clinical Trials',
    metaDescription: 'Retatrutide dosing protocol from Phase 2 and Phase 3 trials — starting dose, escalation steps, maintenance dose, injection frequency, and why gradual titration matters.',
    category: 'Medication Safety',
    readingTime: '7 min read',
    publishedDate: '2026-03-26',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt: 'How retatrutide dosing works — injection frequency, dose escalation steps from clinical trials, maintenance dosing, and why gradual titration matters for tolerability.',
    relatedSlugs: ['retatrutide-what-to-expect-week-by-week', 'retatrutide-weight-loss-results', 'retatrutide-eligibility-bmi-screening'],
    content: `How is retatrutide actually taken? How often? What dose do you start with? How quickly does it increase? When do you reach the full therapeutic dose? And why does the escalation schedule matter so much for tolerability?

These are practical questions from someone seriously evaluating this treatment. The clinical trial protocols provide clear, specific answers.

## Injection Basics

Retatrutide is a once-weekly subcutaneous injection — the same frequency as tirzepatide and semaglutide. Trial participants self-administered at home, injecting into the abdomen, thigh, or upper arm and rotating sites weekly.

The once-weekly schedule is part of what makes modern GLP-1 treatment practical. No daily injections. No clinic visits for administration. No infusions.

## The Dose Escalation Protocol

Retatrutide is never started at the full therapeutic dose. Every clinical trial used a structured step-up schedule designed to minimize gastrointestinal side effects.

**TRIUMPH-4 escalation to 12mg target:** Weeks 1–4: 2mg weekly (starting dose). Weeks 5–8: 4mg weekly (first escalation). Weeks 9–12: 6mg weekly (intermediate step). Weeks 13–16: 9mg weekly (near-therapeutic). Week 17 onward: 12mg weekly (full maintenance).

**For the 9mg target:** Same escalation through 2mg → 4mg → 6mg → 9mg, reaching target by approximately week 13.

Each step lasts 4 weeks — enough time for the digestive system to adapt before the next increase. It takes approximately 16 weeks to reach the highest dose. This is not wasted time. The 2mg and 4mg doses are already producing appetite suppression and early weight loss. The escalation builds on a foundation, not waiting for results to start.

## Why the Gradual Approach Matters

The dose escalation protocol is not a regulatory formality. It directly determines whether a patient tolerates the treatment or quits.

GLP-1 class medications slow gastric emptying and fundamentally change how the digestive system processes food. Starting at the full dose overwhelms the system — producing severe nausea, vomiting, and GI distress.

Starting low and building gradually allows incremental adaptation. In TRIUMPH-4, nausea affected 43% of participants at the highest dose — but most cases were mild to moderate and concentrated during escalation weeks, not during maintenance.

This is the strongest practical argument for physician oversight. A doctor monitoring your response has the flexibility to extend any dose step — spending 6–8 weeks at 4mg instead of 4, for example — before moving to the next level. Self-dosing eliminates this flexibility.

For a complete walk-through of the treatment timeline, see [what to expect week by week on retatrutide](/learn/retatrutide-what-to-expect-week-by-week).

## Maintenance Dosing: A Lower Dose for Long-Term Use?

The TRIUMPH program is testing a 4mg maintenance dose — intended for patients who have achieved their weight loss goals and want to sustain results at a lower dose with potentially fewer side effects and lower cost.

This reflects a clinical principle: the dose needed to lose weight may be higher than the dose needed to keep it off. If the 4mg maintenance data is positive (results expected 2026), it could mean patients eventually step down — reducing both side effect exposure and ongoing cost.

TRIUMPH-1 and TRIUMPH-2 both include maintenance dosing arms.

## How This Compares to Tirzepatide Dosing

Tirzepatide follows the same philosophy: once-weekly injection, gradual escalation, 4-week steps.

**Tirzepatide escalation:** 2.5mg → 5mg → 7.5mg → 10mg → 12.5mg → 15mg. Each step lasts 4 weeks. Total time to maximum dose: approximately 20 weeks.

The experience — weekly injection, gradual appetite change, GI adjustment during dose steps, progressive weight loss — transfers directly. Patients who go through tirzepatide's escalation now will already understand the process if they transition to retatrutide later.

For a comparison of expected results, see [retatrutide weight loss data](/learn/retatrutide-weight-loss-results).

To determine whether your profile is suited for GLP-1 treatment, see [who qualifies for retatrutide](/learn/retatrutide-eligibility-bmi-screening).

## The Crucial Caveat

Everything described here comes from clinical trial protocols. No official retatrutide prescribing label exists because the drug is not approved. Any "dosing guide" online that frames this as prescribing advice is premature.

When retatrutide receives approval, the official recommendations will be set by the FDA based on the complete Phase 3 dataset. The escalation schedule, target doses, and maintenance protocols may differ from what was tested.

Until then, tirzepatide has established, physician-guided dosing protocols that Kora Health physicians follow precisely.`
  },
  {
    slug: 'retatrutide-philippines',
    title: 'Retatrutide in the Philippines: What It Is, How It Works, and What to Know',
    seoTitle: 'Retatrutide in the Philippines: What It Is, How It Works, and What to Know',
    metaDescription: 'What retatrutide is, how it works as a triple agonist, what Phase 3 trials show, when it may reach the Philippines, and what treatment is available now.',
    category: 'Treatment Guides',
    readingTime: '9 min read',
    publishedDate: '2026-03-25',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt: 'Everything Filipinos need to know about retatrutide — Phase 3 results, expected timeline, what\'s available now, and why you don\'t have to wait.',
    relatedSlugs: ['is-retatrutide-safe', 'how-to-explore-retatrutide-philippines', 'retatrutide-vs-tirzepatide'],
    content: `A triple-agonist weight loss drug that produced 28.7% body weight reduction in its first Phase 3 trial. If you are in the Philippines and searching for information about retatrutide, that number is probably what brought you here.

The interest is justified. But the gap between the clinical headlines and what is actually available to you today is significant — and navigating it requires clear information, not marketing.

This guide covers what retatrutide is, how the triple-agonist mechanism works, what the clinical data actually shows, where it stands in the regulatory process, when it might become available, and what proven treatment options exist right now.

## How Retatrutide Works: The Triple-Agonist Mechanism

Retatrutide is an investigational once-weekly injectable developed by Eli Lilly. It is the first medication to simultaneously activate three hormone receptors involved in metabolic regulation.

**GLP-1 receptor** — suppresses appetite, slows gastric emptying, improves insulin secretion. This is the pathway that semaglutide (Ozempic) and tirzepatide (Mounjaro) both target.

**GIP receptor** — enhances insulin sensitivity, amplifies appetite suppression, may improve fat metabolism. Tirzepatide targets this alongside GLP-1. Semaglutide does not.

**Glucagon receptor** — increases resting energy expenditure (the body burns more calories at rest) and accelerates hepatic fat clearance (liver fat reduction). Only retatrutide activates this among current GLP-1 class drugs.

Each additional receptor pathway contributes a distinct metabolic benefit. The glucagon pathway — unique to retatrutide — is the likely driver behind its clinical trial results exceeding both semaglutide and tirzepatide. Some people search for retatrutide under the shortened term "reta," particularly in online health forums and social media. Throughout this guide, we use the full name for clarity.

For a deeper look at the mechanism and safety data, see [what retatrutide is and how it works](/learn/is-retatrutide-safe).

## What the Clinical Trials Show

### Phase 2 (New England Journal of Medicine, 2023)

The pivotal Phase 2 trial enrolled 338 adults with obesity. At 48 weeks, participants on the highest dose (12mg) lost an average of 24.2% of their body weight — the largest reduction recorded for a GLP-1 class drug at the time of publication.

### Phase 3 — TRIUMPH-4 (December 2025)

TRIUMPH-4 is the first completed Phase 3 trial. It studied 445 adults with obesity and knee osteoarthritis over 68 weeks. Results at the 12mg dose: 28.7% average body weight reduction (approximately 32.3kg from a 112.7kg baseline). The 9mg dose produced 26.4%.

Beyond weight loss, TRIUMPH-4 showed 75.8% reduction in knee osteoarthritis pain scores, significant improvements in physical function, and reductions in cardiovascular risk markers including non-HDL cholesterol and systolic blood pressure.

### What's Still Coming

Seven additional Phase 3 trials in Eli Lilly's TRIUMPH program are expected to report throughout 2026, covering obesity without comorbidities, type 2 diabetes, cardiovascular outcomes, obstructive sleep apnea, chronic low back pain, and liver disease.

## When Will Retatrutide Be Available in the Philippines?

There is no confirmed date. Here is the most realistic timeline based on publicly available information.

Remaining TRIUMPH trials are expected to complete throughout 2026. Eli Lilly has indicated it intends to file a New Drug Application (NDA) with the US FDA — likely in late 2026 or early 2027. Standard FDA review takes 10-12 months. Priority Review (possible given the unmet medical need) shortens this to 6-8 months.

The most realistic window for US FDA approval is late 2027 to early 2028. Philippine FDA approval would follow — the gap depends on whether Eli Lilly files simultaneously or sequentially.

Prediction markets give retatrutide only an 18% chance of approval in 2026. The consensus expectation is 2027.

The bottom line: retatrutide is approximately 18-24 months from availability through legitimate medical channels in the Philippines.

## What About Products Labeled "Retatrutide" Being Sold Now?

Products marketed as retatrutide exist — from peptide vendors, compounders, and social media sellers. An honest assessment: these are not manufactured by Eli Lilly, have not been tested in clinical trials, are not verified for purity or potency by any regulatory body, and are sold without physician evaluation, prescription, or monitoring.

The US FDA has issued warnings about unapproved GLP-1 products marketed for weight loss. The Philippine FDA has similarly cautioned against unregulated medications from unauthorized channels.

Using an unverified product means accepting risks that a legitimate medical provider would never ask you to accept. The difference between pharmaceutical-grade retatrutide in a controlled clinical trial and an unverified vial from an online seller is not trivial.

For a practical breakdown of the access situation, see [exploring retatrutide support in the Philippines](/learn/how-to-explore-retatrutide-philippines).

## How Kora Health Is Preparing for Retatrutide

Kora Health currently offers tirzepatide-based weight management programs with full medical oversight — physician evaluation, personalized prescribing, cold-chain delivery, and structured follow-up care. We are monitoring the retatrutide clinical program and regulatory timeline closely.

When retatrutide receives regulatory approval, we intend to offer it as part of our treatment portfolio — with the same physician-led, safety-first approach. Patients who begin treatment with Kora now will have an established medical relationship in place for a seamless transition when new treatments become available.

For patients across Metro Manila and the Philippines, see [where people are searching for retatrutide information](/learn/retatrutide-philippines-locations).

For a comparison of how retatrutide stacks up against currently available treatment, see [retatrutide vs tirzepatide](/learn/retatrutide-vs-tirzepatide).`
  },
  {
    slug: 'how-to-explore-retatrutide-philippines',
    title: 'How to Explore Retatrutide Support in the Philippines: Consultation, Screening, and Next Steps',
    seoTitle: 'How to Explore Retatrutide Support in the Philippines: Consultation, Screening, and Next Steps',
    metaDescription: 'Interested in retatrutide? Here\'s what a physician-led consultation looks like, why screening matters, and what metabolic health support is available in the Philippines today.',
    category: 'Weight Management',
    readingTime: '7 min read',
    publishedDate: '2026-03-25',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt: 'What a physician-led metabolic health consultation looks like, why screening matters, and how to position yourself for the best care now and when retatrutide becomes available.',
    relatedSlugs: ['retatrutide-philippines', 'is-retatrutide-safe', 'retatrutide-philippines-locations'],
    content: `You have read about retatrutide's clinical results and you want to take the next step. The question is not whether the science is compelling — it is. The question is: what can you actually do about it in the Philippines right now?

The answer is more practical than most articles will tell you. Retatrutide itself is not available through any legitimate channel yet. But the physician-led evaluation process that will eventually govern retatrutide access already exists — and it is already accessible for the treatment that sits closest to retatrutide in clinical effectiveness.

This guide walks through what a proper metabolic health consultation looks like, why medical screening matters for any GLP-1 treatment, and how to position yourself for the best possible care both now and when retatrutide becomes available.

## Why a Physician Consultation Comes First

Any legitimate GLP-1 treatment — whether tirzepatide today or retatrutide in the future — requires a medical evaluation before prescription. This is not a formality. It is the safety infrastructure that separates medical care from a product transaction.

A proper consultation includes a review of your complete medical history including chronic conditions, medications, and family medical history. The physician screens for contraindications — including thyroid cancer history, pancreatitis, MEN 2 syndrome, and pregnancy. Baseline metrics are established: weight, BMI, and relevant lab work if indicated. The physician discusses realistic expectations, the treatment timeline, potential side effects, and what the program involves.

This process is identical whether the medication being considered is tirzepatide or — eventually — retatrutide. Establishing this medical relationship now means you are already prepared when new treatment options become available.

For background on what retatrutide is and where it stands, see [retatrutide in the Philippines](/learn/retatrutide-philippines).

## What "Exploring Retatrutide Support" Actually Means in 2026

Since retatrutide is still in Phase 3 trials and has not been submitted for regulatory approval, "exploring retatrutide support" in practical terms means three things.

First, understanding what retatrutide is, how the triple-agonist mechanism works, and what the clinical data shows — so you can make informed decisions when it does become available. For this, see [our guide to retatrutide safety and side effects](/learn/is-retatrutide-safe).

Second, beginning treatment with the most effective currently approved medication — tirzepatide — under physician supervision. This is not a compromise. Tirzepatide produced 20.2% average body weight reduction in SURMOUNT-5, is Philippine FDA-approved, and has a robust evidence base. Patients who start now build medical history, treatment response data, and a physician relationship that will directly inform whether and how to transition to retatrutide later.

Third, establishing a relationship with a physician-led platform that stays current on the retatrutide clinical program and will offer it through proper medical channels when approved.

## What You Should Avoid

Not every source of "retatrutide support" in the Philippines is offering medical care. Be cautious of sellers offering retatrutide without any medical consultation — products labeled as retatrutide sold through social media, Telegram channels, or peptide vendor sites are unregulated and unverified. Be cautious of providers who frame unapproved products as equivalent to the clinical trial compound — compounded or "research" retatrutide is not the pharmaceutical-grade product being studied by Eli Lilly. And be cautious of any "consultation" that consists of a brief questionnaire with auto-generated output — if no physician reviews your medical history individually, that is not a medical evaluation.

## What a Kora Health Consultation Looks Like

The process is straightforward. You complete a brief health screening form. A licensed Philippine physician reviews your information and conducts a consultation — evaluating your health profile, discussing your goals, and determining whether GLP-1 treatment is medically appropriate.

If treatment is appropriate, your physician prescribes a personalized plan using tirzepatide — the most effective approved option. Medication is compounded in an FDA-regulated pharmacy, delivered in cold-chain packaging, and supported by structured follow-up care including weekly check-ins and monthly consultations.

When retatrutide becomes available, your existing physician relationship and treatment data will position you for a seamless evaluation of whether the triple-agonist approach is right for your specific health profile.

For patients across Metro Manila and other Philippine cities, see [where Filipinos are searching for retatrutide information](/learn/retatrutide-philippines-locations).

## The Practical Bottom Line

Exploring retatrutide in the Philippines in 2026 means educating yourself, avoiding unverified products, and beginning treatment with what is proven and available under physician supervision. The consultation process that governs safe GLP-1 treatment already exists. The question is not whether to start — it is who you trust to guide you.`
  },
  {
    slug: 'is-retatrutide-safe',
    title: 'Is Retatrutide Safe? Side Effects, Risks, and What to Consider Before Starting',
    seoTitle: 'Is Retatrutide Safe? Side Effects, Risks, and What to Consider Before Starting',
    metaDescription: 'What clinical trials reveal about retatrutide safety — common side effects, the new dysesthesia signal, serious risks, and why physician oversight is essential.',
    category: 'Medication Safety',
    readingTime: '8 min read',
    publishedDate: '2026-03-25',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt: 'What clinical trials reveal about retatrutide safety — common side effects, the dysesthesia signal, serious risks, and why physician monitoring is essential.',
    relatedSlugs: ['retatrutide-philippines', 'how-to-explore-retatrutide-philippines', 'retatrutide-vs-tirzepatide'],
    content: `You have seen the retatrutide weight loss numbers. Now you want the part that most hype articles skip: what does the safety data actually show? What side effects are common? What is the dysesthesia signal everyone is discussing? And what risks should a physician evaluate before prescribing this class of medication?

The clinical trial data provides clear answers. Here is what the evidence says — without minimizing the risks or overstating the concerns.

## Where This Safety Data Comes From

Retatrutide's safety profile is based on a completed Phase 2 trial (published in NEJM, 2023, 338 participants) and the first Phase 3 results from TRIUMPH-4 (December 2025, 445 participants). Seven additional Phase 3 trials are reporting throughout 2026, which will significantly expand the safety dataset.

This is a growing but still limited evidence base compared to tirzepatide (tens of thousands of participants across multiple completed Phase 3 trials) or semaglutide (even larger datasets). The safety picture for retatrutide will become clearer as more TRIUMPH data is published.

For the full clinical overview, see [what retatrutide is and how it works](/learn/retatrutide-philippines).

## Common Side Effects

The most frequently reported side effects are gastrointestinal — consistent with every GLP-1 class medication studied to date.

In TRIUMPH-4, nausea was reported by approximately 43% of participants on the highest dose, diarrhea by 33%, vomiting by 21%, constipation and decreased appetite at lower but meaningful rates. These rates are somewhat higher than typically seen in tirzepatide trials (24-33% nausea), which may reflect the additional glucagon receptor activity, the more pronounced weight loss, or population differences between trials.

The critical context: gastrointestinal side effects concentrate in the dose escalation phase — the first several weeks when the dose is gradually increased. For most patients in GLP-1 trials, these effects are mild to moderate and improve significantly as the body adjusts. Slow, physician-guided dose escalation is the primary tool for managing GI tolerability.

For a comparison of side effect profiles between retatrutide and tirzepatide, see [retatrutide vs tirzepatide](/learn/retatrutide-vs-tirzepatide).

## Dysesthesia: The New Signal

The most discussed safety finding from TRIUMPH-4 is dysesthesia — skin sensitivity, tingling, or tenderness to touch — reported in approximately 20.9% of participants on the 12mg dose. This side effect was not observed in the Phase 2 trial, making it a genuinely new signal.

Several important qualifications: the dysesthesia events were generally described as mild. They rarely led to treatment discontinuation. The mechanism is not yet fully understood — it may be related to glucagon receptor activation, the degree of weight loss, or other metabolic changes. More data from the remaining TRIUMPH trials will be needed to fully characterize this side effect.

This finding is worth monitoring, not panicking about. But it is a legitimate new consideration that distinguishes retatrutide's safety profile from tirzepatide and semaglutide, which have not shown this signal.

## Serious but Rare Risks

Based on the GLP-1 class profile and the available retatrutide data, the following serious risks apply.

**Pancreatitis.** Acute pancreatitis is a known class-level risk for GLP-1 medications. Symptoms include severe abdominal pain radiating to the back. Any occurrence requires immediate medical attention and discontinuation of treatment.

**Gallbladder disease.** Rapid weight loss — regardless of the method — increases the risk of gallstone formation. Given retatrutide's pronounced weight loss effect, this risk may be elevated compared to lower-efficacy medications.

**Thyroid C-cell tumors.** GLP-1 class drugs have caused thyroid C-cell tumors in rodent studies. This has not been confirmed in humans. Retatrutide is expected to carry a boxed warning similar to tirzepatide and semaglutide. It will be contraindicated for anyone with a personal or family history of medullary thyroid carcinoma or MEN 2 syndrome.

**Excessive weight loss.** In TRIUMPH-4, some participants discontinued treatment because they lost more weight than intended. Eli Lilly noted that discontinuation rates due to adverse events correlated with lower baseline BMI. This is a novel concern — the medication may be too effective for some patients, requiring careful dose management.

## Who Should Not Take Retatrutide

Based on the GLP-1 class profile, retatrutide will be contraindicated for individuals with a personal or family history of medullary thyroid carcinoma, those with MEN 2 syndrome, individuals who are pregnant or breastfeeding, and those with known hypersensitivity to the compound.

Physicians will also exercise caution with patients who have a history of severe pancreatitis, gastroparesis, or significant kidney impairment.

This is why medical screening exists — and why accessing any GLP-1 treatment without a physician evaluation introduces avoidable risk. For a practical guide to what the screening process looks like, see [exploring retatrutide support in the Philippines](/learn/how-to-explore-retatrutide-philippines).

## The Bottom Line on Safety

Retatrutide's safety profile is consistent with the GLP-1 class but carries some unique considerations — particularly the dysesthesia signal and the potential for excessive weight loss in lower-BMI patients. The evidence base is still growing. Seven additional Phase 3 trials reporting in 2026 will substantially expand what we know.

For anyone considering GLP-1 treatment today, tirzepatide has the most extensive Phase 3 safety dataset of any dual- or triple-agonist medication. It has been studied in tens of thousands of participants and is FDA-approved. That depth of evidence is valuable.

For a comparison of the two treatments, see [retatrutide vs tirzepatide](/learn/retatrutide-vs-tirzepatide).`
  },
  {
    slug: 'retatrutide-vs-tirzepatide',
    title: 'Retatrutide vs Tirzepatide: What\'s the Difference for Weight Management?',
    seoTitle: 'Retatrutide vs Tirzepatide: What\'s the Difference for Weight Management?',
    metaDescription: 'How retatrutide compares to tirzepatide — triple agonist vs dual agonist, clinical weight loss data, side effects, and what\'s actually available in the Philippines.',
    category: 'Comparisons',
    readingTime: '7 min read',
    publishedDate: '2026-03-25',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt: 'Evidence-based comparison of retatrutide and tirzepatide — mechanism, weight loss data, side effects, and the critical availability difference.',
    relatedSlugs: ['retatrutide-philippines', 'how-to-explore-retatrutide-philippines', 'is-retatrutide-safe'],
    content: `Triple agonist versus dual agonist. Three receptors versus two. 28.7% weight loss versus 20.2%. The headlines make retatrutide sound like a clear upgrade over tirzepatide.

The reality is more nuanced — and one critical factor makes the comparison academic for anyone making a decision in the Philippines in 2026: one medication is available now, and one is not.

Here is an honest, evidence-based comparison that acknowledges both the data and the practical reality.

## How They Work: The Receptor Difference

**Tirzepatide** activates two receptors — GLP-1 and GIP. This dual mechanism reduces appetite, improves insulin sensitivity, enhances satiety, and supports fat metabolism. It is sold under the brand names Mounjaro (diabetes) and Zepbound (weight management). It is FDA-approved and Philippine FDA-approved.

**Retatrutide** activates three receptors — GLP-1, GIP, and glucagon. It does everything tirzepatide does, plus the glucagon pathway increases resting energy expenditure and accelerates liver fat clearance. It is an investigational drug in Phase 3 clinical trials. It is not approved by any regulatory agency.

The glucagon receptor is the meaningful pharmacological addition. It is the likely explanation for retatrutide's superior weight loss numbers — the body burns more calories at rest while simultaneously experiencing reduced appetite and improved metabolic function.

For a detailed explanation of the triple-agonist mechanism, see [what retatrutide is and how it works](/learn/retatrutide-philippines).

## Weight Loss Data: What the Numbers Say

No head-to-head trial between retatrutide and tirzepatide has been completed. The comparison below draws from their respective clinical trials — different populations, different baseline characteristics, different designs. Cross-trial comparison is informative but imprecise.

**Tirzepatide — SURMOUNT-5 (NEJM 2025):** 20.2% mean body weight reduction at 72 weeks. Head-to-head against semaglutide (13.7%). Population: adults with obesity, no diabetes.

**Retatrutide — TRIUMPH-4 (December 2025):** 28.7% mean body weight reduction at 68 weeks versus placebo. Population: adults with obesity and knee osteoarthritis (higher average BMI of 40.4).

**Retatrutide — Phase 2 (NEJM 2023):** 24.2% mean body weight reduction at 48 weeks. Population: adults with obesity.

The absolute numbers favor retatrutide by a meaningful margin. The TRIUMPH-4 population had higher baseline BMI, which can produce larger absolute weight loss. A direct randomized comparison of the two drugs in matched populations has not been published.

## Side Effects: Where They Differ

Both share the GLP-1 class gastrointestinal profile — nausea, diarrhea, constipation, vomiting, decreased appetite. Both are primarily experienced during dose escalation and are generally mild to moderate.

Key differences in the current data:

**GI event rates** appear somewhat higher with retatrutide (43% nausea in TRIUMPH-4) compared to tirzepatide (24-33% in SURMOUNT trials). Direct comparison is limited by trial design differences.

**Dysesthesia** — skin sensitivity and tingling — was reported in approximately 21% of participants on the highest retatrutide dose. This has not been observed with tirzepatide. It is generally mild but represents a genuinely unique safety signal.

**Excessive weight loss** led to some discontinuations in TRIUMPH-4, particularly in patients with lower baseline BMI. This concern is less prominent in the tirzepatide data.

Both carry the same class-level warnings for pancreatitis, gallbladder disease, and thyroid C-cell tumors.

For more detail on the safety data, see [retatrutide safety and side effects](/learn/is-retatrutide-safe).

## Availability: The Factor That Changes Everything

This is where the comparison moves from theoretical to practical.

**Tirzepatide** is available now. It has been through the full regulatory process. It is sold at Philippine pharmacies (branded Mounjaro). It is available through telehealth providers as a compounded option. You can begin treatment after a medical consultation.

**Retatrutide** is approximately 18-24 months from potential regulatory approval. NDA filing is projected for late 2026 to early 2027. FDA review takes 6-12 months. Philippine FDA approval follows. Products currently labeled "retatrutide" from unregulated sellers are not the pharmaceutical-grade compound from clinical trials.

Waiting 18-24 months for a potentially superior medication while an effective, approved treatment exists means 18-24 months of continued metabolic burden — elevated cardiovascular risk, insulin resistance, joint stress, and reduced quality of life.

For a detailed look at the access situation, see [exploring retatrutide support in the Philippines](/learn/how-to-explore-retatrutide-philippines).

## How to Think About This Decision

If both medications were available today, a physician would evaluate which one best fits your specific medical profile, comorbidities, tolerance, and goals. "More potent" does not always mean "best for every patient."

Since only tirzepatide is available, the practical framework is: begin treatment with the most effective proven option now, build a medical relationship and treatment history, and evaluate transitioning to retatrutide if and when it is approved and your physician determines it is appropriate for your situation.

Patients who start treatment now are not making a lesser choice. They are making a medically sound decision with the best available evidence — and positioning themselves for the future simultaneously.

For more on how tirzepatide compares to semaglutide (both currently available), see [tirzepatide vs semaglutide](/learn/tirzepatide-vs-semaglutide).`
  },
  {
    slug: 'retatrutide-philippines-locations',
    title: 'Where People in Metro Manila, Makati, BGC, Cebu, and Davao Are Searching for Retatrutide Information',
    seoTitle: 'Where People in Metro Manila, Makati, BGC, Cebu, and Davao Are Searching for Retatrutide Information',
    metaDescription: 'Retatrutide search interest is growing across the Philippines — Metro Manila, Cebu, Davao. What Filipinos should know about access, timeline, and physician-led alternatives available now.',
    category: 'Kora Learn',
    readingTime: '7 min read',
    publishedDate: '2026-03-25',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt: 'Retatrutide search interest is growing in Metro Manila, Cebu, and Davao. What Filipinos in major cities should know about access, timeline, and what\'s available now.',
    relatedSlugs: ['retatrutide-philippines', 'how-to-explore-retatrutide-philippines', 'retatrutide-vs-tirzepatide'],
    content: `Search interest in retatrutide is growing across the Philippines — concentrated in the same cities where demand for medical weight loss treatment has surged over the past two years. Metro Manila leads, followed by Cebu and Davao. Makati, BGC/Taguig, and Quezon City show the highest density of searches within the metro area.

If you are in any of these locations and researching retatrutide, you are not alone. But you are also likely running into the same problem as everyone else: the information is scattered, the sources are unreliable, and the line between legitimate medical guidance and underground peptide marketing is difficult to distinguish.

This guide clarifies the situation for Filipinos in major cities — what retatrutide is, why it is generating interest, when it may actually become available, and what physician-led treatment you can access right now regardless of where you live.

## Why Retatrutide Search Interest Is Concentrated in These Cities

The geographic pattern is predictable. Metro Manila — particularly the business districts of Makati, BGC/Taguig, and the medical corridors of Quezon City — has the highest concentration of health-conscious professionals, specialist physicians, and early adopters of medical weight management. Cebu and Davao are the next largest urban centers with growing awareness of GLP-1 treatment options.

These are the same areas where tirzepatide and semaglutide adoption has been strongest. The population searching for retatrutide largely overlaps with the population that already knows about GLP-1 medications and is looking for the next evolution.

For the full picture on retatrutide's clinical data and regulatory timeline, see [retatrutide in the Philippines](/learn/retatrutide-philippines).

## The Access Reality Across All Philippine Locations

Here is what is uniform across every city: retatrutide is not available through any legitimate medical provider in the Philippines. Not in Makati. Not in BGC. Not in Cebu. Not in Davao. Not anywhere. It is an investigational drug in Phase 3 clinical trials with no regulatory approval anywhere in the world.

Products marketed as retatrutide from local sellers, social media accounts, or peptide vendors — regardless of which city they claim to operate from — are unregulated and unverified. The geographic location of the seller does not change the regulatory status of the product.

This is not a supply chain problem or a distribution gap. The drug has not completed the approval process required for it to be legally prescribed.

For a detailed look at why these products carry risk, see [exploring retatrutide support in the Philippines](/learn/how-to-explore-retatrutide-philippines).

## What IS Available Across Philippine Cities

While retatrutide is 18-24 months from potential availability, tirzepatide — the dual-agonist that produced 20.2% average weight loss in head-to-head trials — is accessible nationwide through two channels.

**In-person clinics** are concentrated in Metro Manila. Makati Medical Center, St. Luke's BGC, The Medical City in Pasig, and numerous private weight management clinics in Quezon City offer endocrinology and obesity medicine consultations. Cebu and Davao have specialist clinics as well, though with fewer options.

**Telehealth platforms** have equalized access across the entire country. A licensed Philippine physician can conduct a full medical evaluation remotely — reviewing health history, screening for contraindications, discussing treatment options — and prescribe tirzepatide if appropriate. Medication is compounded and delivered in temperature-controlled packaging to any address.

This means a patient in Davao has the same access to physician-led metabolic health treatment as someone in Makati CBD. The telehealth model eliminates the geographic constraint that historically limited specialist care to major metropolitan centers.

## City-by-City: What to Know

**Metro Manila (Makati, BGC, Quezon City, Pasig, Mandaluyong):** The highest density of both in-person clinics and telehealth providers. Competition among providers means more options — but also more variance in quality. Verify physician credentials, medication sourcing, and follow-up care structure before choosing.

**Cebu:** Growing medical weight management market. Several endocrinology practices offer GLP-1 consultations. Telehealth access extends the available provider pool beyond local clinics.

**Davao:** Specialist availability is more limited than Manila or Cebu. Telehealth is the primary access channel for physician-led metabolic health treatment.

**Other Philippine cities (Iloilo, Bacolod, Cagayan de Oro, Zamboanga):** Specialist endocrinology and obesity medicine clinics are sparse. Telehealth is often the only practical route to physician-supervised GLP-1 treatment.

The consistent message across all locations: the quality of your care depends on the physician and platform you choose, not your proximity to a physical clinic.

For a detailed comparison of treatment options, see [retatrutide vs tirzepatide](/learn/retatrutide-vs-tirzepatide).

## Starting Treatment Now vs Waiting for Retatrutide

The temptation to wait for the "best possible" medication is understandable. Retatrutide's clinical numbers are remarkable. But 18-24 months of waiting is 18-24 months of delayed health improvement — months during which tirzepatide could be producing measurable weight loss, metabolic improvement, and reduced cardiovascular risk.

Patients who begin treatment now with a physician-led platform build the medical history, treatment response data, and clinical relationship that will inform whether and how to transition to retatrutide when it becomes available.

For a complete overview of what retatrutide is and when it may arrive, see [retatrutide in the Philippines](/learn/retatrutide-philippines).`
  },
  {
    slug: 'tirzepatide-philippines',
    title:
      'Tirzepatide in the Philippines: A Complete Guide to Cost, Access, and Physician-Led Treatment',
    seoTitle:
      'Tirzepatide in the Philippines: Cost, Access & Physician Guide (2026)',
    metaDescription:
      'How tirzepatide works, what it costs in the Philippines, and how to access it through a licensed physician. A complete guide for 2026.',
    category: 'Weight Management',
    readingTime: '9 min read',
    publishedDate: '2026-03-24',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt:
      'Everything you need to know about tirzepatide in the Philippines — how it works, what it costs, how to access it safely, and why physician supervision is essential.',
    relatedSlugs: [
      'tirzepatide-side-effects',
      'how-to-get-tirzepatide-philippines',
      'tirzepatide-vs-semaglutide',
    ],
    content: `Tirzepatide is now available in the Philippines — but finding reliable information about it is still surprisingly difficult. Pricing is opaque. Sources range from legitimate clinics to anonymous social media accounts. And the gap between what is medically appropriate and what is being sold online is wide enough to be dangerous.

This guide exists to close that gap. It covers what tirzepatide is, what it actually costs in the Philippines in 2026, how to access it through proper medical channels, and why the "how" matters as much as the medication itself.

## What Tirzepatide Is and Why It Matters

Tirzepatide is a dual-action GLP-1/GIP receptor agonist developed by Eli Lilly. It is sold under the brand names Mounjaro (approved for type 2 diabetes) and Zepbound (approved for chronic weight management). Both the US FDA and the Philippine FDA have approved tirzepatide.

What separates tirzepatide from earlier weight loss medications is its mechanism. Older GLP-1 drugs like semaglutide (Ozempic, Wegovy) target a single hormone receptor. Tirzepatide targets two — GLP-1 and GIP — simultaneously. This dual action produces stronger appetite suppression, better blood sugar regulation, and greater fat loss in clinical trials.

For a detailed comparison of these two medications, see our guide to [tirzepatide vs semaglutide](/learn/tirzepatide-vs-semaglutide).

## Clinical Results: What the Evidence Shows

The weight loss data for tirzepatide is not speculative. It comes from large Phase 3 clinical trials published in peer-reviewed journals.

In the SURMOUNT-1 trial — conducted in adults with obesity but without diabetes — participants on tirzepatide lost an average of 15% to 21% of their body weight over 72 weeks, depending on the dose. For someone weighing 90 kilograms, 20% weight loss means approximately 18 kilograms lost.

In 2025, the SURMOUNT-5 trial (published in the New England Journal of Medicine) directly compared tirzepatide to semaglutide in a head-to-head study. Tirzepatide produced a mean weight reduction of 20.2%, compared to 13.7% for semaglutide. Participants on tirzepatide were also significantly more likely to reach 15% and 20% weight loss thresholds.

Beyond the scale, the clinical data shows improvements in blood pressure, cholesterol, fasting glucose, liver fat, and waist circumference — markers that matter for long-term cardiovascular and metabolic health.

## What Tirzepatide Costs in the Philippines in 2026

Pricing varies depending on whether you use the branded product or a compounded alternative.

**Branded Mounjaro KwikPen** is available at selected Philippine pharmacies including Watsons. Prices range from approximately ₱16,000 to ₱34,000 per pen depending on dose strength. These are the FDA-approved devices manufactured by Eli Lilly — pre-filled and ready to use without reconstitution.

**Compounded tirzepatide** is prepared by licensed compounding pharmacies and available through telehealth providers and specialty clinics. Prices typically range from ₱7,000 to ₱15,000 per month depending on dose and provider. Compounded medications are not FDA-approved. The quality depends on the compounding pharmacy's licensing, standards, and the provider's sourcing transparency.

**Bundled treatment programs** from some clinics include medication, physician consultations, follow-up monitoring, and delivery. The sticker price may be higher, but the total cost of care — when you factor in separate consultation fees, lab work, and delivery — often works out to be comparable or better.

The important distinction is not just price. It is what you receive alongside the medication: medical screening, dosing guidance, side effect management, and ongoing monitoring. A cheap vial without medical support is not a bargain — it is a risk.

For a practical walkthrough of the access process, see [how to get tirzepatide in the Philippines](/learn/how-to-get-tirzepatide-philippines).

## Is Tirzepatide Safe?

Tirzepatide has been studied in clinical trials involving tens of thousands of participants. The most common side effects are gastrointestinal — nausea, diarrhea, constipation, and reduced appetite — especially during the first weeks as the dose is gradually increased. For most people, these are mild to moderate and improve with time.

Serious but rare risks include pancreatitis, gallbladder disease, and a boxed warning regarding thyroid C-cell tumors found in animal studies (not confirmed in humans). Tirzepatide is contraindicated for anyone with a personal or family history of medullary thyroid carcinoma or MEN 2 syndrome.

We cover tirzepatide safety in much more detail in our dedicated guide: [tirzepatide side effects, risks, and what to expect](/learn/tirzepatide-side-effects).

## How to Access Tirzepatide in the Philippines

The legitimate path to tirzepatide always begins with a medical consultation. A licensed physician evaluates your health history, screens for contraindications, and determines whether tirzepatide is appropriate for your specific situation. If it is, they issue a prescription. If it is not, a responsible provider will tell you that directly.

What to avoid: purchasing tirzepatide from unverified social media sellers, Telegram channels, or online marketplaces without a medical evaluation. Products from these sources may be counterfeit, degraded from improper storage, or incorrectly dosed. There is no medical recourse if something goes wrong.

For the full step-by-step process, see [our guide to getting tirzepatide safely in the Philippines](/learn/how-to-get-tirzepatide-philippines).

## Who Is Tirzepatide Appropriate For?

Tirzepatide is generally considered appropriate for adults with a BMI of 30 or higher, or a BMI of 27 or higher with at least one weight-related condition such as type 2 diabetes, hypertension, or dyslipidemia.

It is not appropriate for individuals with a history of medullary thyroid carcinoma or MEN 2, those who are pregnant or breastfeeding, or those with certain other medical conditions. Only a physician evaluation can determine whether the treatment fits your health profile.

In the Philippines — where approximately 38.6% of adults aged 20-59 are overweight or obese according to 2022 survey data — the potential patient population is substantial. But potential eligibility is not the same as a prescription. Medical evaluation comes first.

## Making the Right Choice

Tirzepatide is one of the most effective weight management medications available today — in the Philippines or anywhere. The clinical evidence is strong, the mechanism is well-understood, and access in the Philippine market has improved significantly over the past year.

But the medication is only part of the equation. The difference between a good outcome and a risky one comes down to whether you accessed it through proper medical channels: a licensed physician, a regulated pharmacy, and a structured follow-up program that adjusts your treatment as you progress.

For patients across Metro Manila and nationwide, telehealth platforms have made physician-led treatment accessible without the constraints of a single physical clinic. For more on this, see [medical weight loss options across Metro Manila](/learn/medical-weight-loss-manila).`,
  },
  {
    slug: 'how-to-get-tirzepatide-philippines',
    title:
      'How to Get Tirzepatide in the Philippines: Prescription, Consultation, and Safe Access',
    seoTitle:
      'How to Get Tirzepatide in the Philippines: Safe Access Guide (2026)',
    metaDescription:
      'Step-by-step: how to get tirzepatide in the Philippines through a licensed physician — prescription process, telehealth options, costs, and red flags to avoid.',
    category: 'Access & Treatment',
    readingTime: '8 min read',
    publishedDate: '2026-03-24',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt:
      'A step-by-step guide to accessing tirzepatide safely in the Philippines — what\'s required, where to get it, and what to avoid.',
    relatedSlugs: [
      'tirzepatide-philippines',
      'tirzepatide-side-effects',
      'medical-weight-loss-manila',
    ],
    content: `You have researched tirzepatide. You understand what it does. Now you need to answer a practical question: how do you actually get it in the Philippines — through a real doctor, from a reliable source, without getting scammed or putting your health at risk?

This is the step-by-step process.

## The Non-Negotiable: You Need a Prescription

Tirzepatide is a prescription medication in the Philippines. There is no legitimate way to obtain it without a physician evaluation and a valid prescription.

This is not bureaucracy. Tirzepatide requires medical screening (it is contraindicated for several conditions), personalized dose selection (starting too high causes avoidable side effects), and ongoing monitoring (dose adjustments based on response and tolerance).

Any seller who offers tirzepatide without requiring a medical consultation first is not operating within proper medical standards. For details on what physicians screen for, see [our guide to tirzepatide side effects and safety](/learn/tirzepatide-side-effects).

## Step 1: Choose Your Medical Provider

You have two main options in the Philippines.

**In-person clinics.** Endocrinology practices and weight management clinics in Metro Manila (particularly in Makati, BGC, and Quezon City), Cebu, and Davao offer consultations. Expect an appointment, a consultation fee (₱1,500–₱3,500 typical for a specialist visit), and potentially a follow-up visit.

**Telehealth platforms.** Online consultations with licensed Philippine physicians have become the most common access route for metabolic health treatment. The physician conducts the evaluation remotely — reviewing your medical history, screening for contraindications, discussing treatment options — and issues a prescription if appropriate. Medication is then compounded and delivered.

For more on how this works across Metro Manila specifically, see [physician-led weight loss options in Metro Manila](/learn/medical-weight-loss-manila).

**What to evaluate in any provider:** Can you identify the prescribing physician by name and PRC license number? Is the pricing transparent? Where is the medication sourced or compounded? Is there a structured follow-up protocol, or is this a one-time transaction? Will they tell you directly if the treatment is not appropriate for you?

## Step 2: Complete a Genuine Medical Evaluation

A proper tirzepatide consultation should cover your complete medical history, screening for contraindications including thyroid cancer history, pancreatitis, and pregnancy, baseline metrics — weight, BMI, and relevant lab work if indicated, and a discussion of realistic expectations, potential side effects, and the treatment timeline.

If a "consultation" consists of a brief online questionnaire with no physician interaction, that is not a medical evaluation.

## Step 3: Understand Your Medication Options

**Branded Mounjaro KwikPen (Eli Lilly).** The FDA-approved product. Pre-filled pen device. Available at selected pharmacies including Watsons. Pricing: approximately ₱16,000–₱34,000 per pen depending on dose.

**Compounded tirzepatide.** Prepared by licensed compounding pharmacies using the active ingredient. Usually supplied as lyophilized powder for reconstitution or pre-mixed injectable. Pricing: typically ₱7,000–₱15,000 per month depending on dose. Compounded products are not FDA-approved.

For a broader picture of cost ranges, see [our complete guide to tirzepatide in the Philippines](/learn/tirzepatide-philippines).

## Step 4: Verify Cold-Chain Delivery

Tirzepatide is a peptide medication that degrades when exposed to heat. In the Philippine climate — where temperatures routinely exceed 30°C — this is a legitimate concern.

A responsible provider ships medication in insulated packaging with cold packs, delivers within a controlled timeframe, and provides storage instructions upon arrival.

## What You Should Avoid

**Social media sellers** offering tirzepatide without a physician consultation. **"Research chemical" sellers** marketing products as not for human consumption. **Any provider that does not require a prescription.** **Extremely low prices** — tirzepatide is not cheap to produce properly.

## What Happens After You Start Treatment

Starting tirzepatide is not the finish line. It is the beginning. Effective treatment includes injection onboarding guidance, weekly check-ins during the first month, dose escalation based on your response, monthly follow-up consultations, and treatment adjustments as you progress.

A provider who dispenses medication and disappears is offering a transaction, not medical care.

## The Practical Summary

The process is straightforward: consult a licensed physician, complete a genuine medical evaluation, receive a prescription if appropriate, obtain medication from a regulated source, and follow through with ongoing physician oversight. Each step exists for a reason. Skipping any of them introduces avoidable risk.`,
  },
  {
    slug: 'medical-weight-loss-manila',
    title:
      'Medical Weight Loss in Metro Manila: How to Access Physician-Led Tirzepatide Treatment',
    seoTitle:
      'Medical Weight Loss in Metro Manila: Tirzepatide Treatment Online & In-Clinic',
    metaDescription:
      'Medical weight loss in Manila, Makati, BGC, and Quezon City — how to access physician-led tirzepatide treatment in Metro Manila through telehealth or in-person clinics.',
    category: 'Local Guide',
    readingTime: '7 min read',
    publishedDate: '2026-03-24',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt:
      'How patients in Makati, BGC, Quezon City, and across Metro Manila can access physician-led weight management with tirzepatide — including telehealth options.',
    relatedSlugs: [
      'tirzepatide-philippines',
      'how-to-get-tirzepatide-philippines',
      'tirzepatide-vs-semaglutide',
    ],
    content: `Medical weight loss demand in Metro Manila has changed significantly in the past two years. What was once a niche service available through a handful of endocrinology clinics has become one of the most searched health topics in the Philippines — driven by the availability of GLP-1 medications like tirzepatide and semaglutide.

If you are in Makati, BGC, Quezon City, or anywhere in the metro area and searching for a medical weight loss provider, this guide covers what to look for, how the treatment landscape has evolved, and why the old model of in-person-only specialist visits is no longer the only option.

## What "Medical Weight Loss" Actually Means

Medical weight loss is a physician-supervised treatment approach that uses evidence-based interventions — typically prescription medication combined with monitoring and lifestyle guidance — to treat obesity as a medical condition.

It is not a gym membership with a nutritionist. It is not a supplement program. It is a licensed physician prescribing an FDA-regulated medication based on a clinical evaluation of your individual health profile, with structured follow-up care.

The medications driving the current shift — particularly tirzepatide — have produced unprecedented clinical results. In the SURMOUNT-5 trial, tirzepatide produced an average 20.2% body weight reduction over 72 weeks.

For a complete breakdown of the clinical evidence, see [our guide to tirzepatide in the Philippines](/learn/tirzepatide-philippines).

## The Metro Manila Treatment Landscape

**Hospital-based endocrinology clinics** — at institutions like Makati Medical Center, St. Luke's BGC, The Medical City in Pasig — offer specialist consultations. These provide a high standard of medical evaluation but involve appointment wait times, per-visit consultation fees (₱1,500–₱3,500), and the logistical reality of Manila traffic.

**Private weight management clinics** in Makati, BGC/Taguig, and Quezon City have multiplied. Some are physician-led with genuine clinical infrastructure. Others are primarily retail operations with minimal medical oversight.

**Telehealth platforms** connect patients with licensed Philippine physicians remotely, provide medication through compounding pharmacies with delivery, and structure follow-up care digitally. The model eliminates the geographic constraint — a patient in Las Piñas, Pasay, Muntinlupa, or Caloocan has the same access as someone in the Makati CBD.

## Why Telehealth Is Changing the Equation

Consider the practical scenario: a patient in Quezon City Commonwealth area wants to consult an endocrinologist in Makati. That is a commitment of 2-4 hours round trip depending on traffic. For monthly follow-ups, this adds up quickly.

Telehealth eliminates this. A licensed physician conducts the same medical evaluation via video or structured online consultation. Medication is compounded and delivered in temperature-controlled packaging to the patient's address. Follow-up check-ins happen remotely.

## What to Evaluate in Any Provider

**A named, identifiable physician** with a PRC license number who conducts your evaluation. **A genuine medical evaluation** — not a 3-question online form. **Transparent medication sourcing.** **Cold-chain delivery.** **Structured follow-up care.** **Willingness to say no** if the treatment is not medically appropriate.

For a full walkthrough, see [how to get tirzepatide through a legitimate provider](/learn/how-to-get-tirzepatide-philippines).

## Choosing Between Tirzepatide and Semaglutide

Most providers in Metro Manila now offer both options. The choice depends on your medical profile, weight loss goals, budget, and physician recommendation.

See [our evidence-based comparison of tirzepatide vs semaglutide](/learn/tirzepatide-vs-semaglutide).

## Beyond Metro Manila

The telehealth model that works for Manila works equally well for patients in Cebu, Davao, Iloilo, and other Philippine cities. Medical weight loss should not be limited to patients who happen to live near a specialist clinic.

## Starting Point

The most productive first step is a physician consultation — not a product purchase. Talk to a licensed doctor who will evaluate your health profile, explain your options honestly, and help you make a decision based on evidence rather than marketing.

For a thorough understanding of what tirzepatide involves, see [our complete guide to tirzepatide in the Philippines](/learn/tirzepatide-philippines).`,
  },
  {
    slug: 'tirzepatide-side-effects',
    title:
      'Tirzepatide Side Effects: What to Expect, What\'s Rare, and When to Call Your Doctor',
    seoTitle:
      'Tirzepatide Side Effects: What to Expect, What\'s Rare & When to Call Your Doctor',
    metaDescription:
      'Honest guide to tirzepatide side effects — what\'s common, what\'s serious, how they\'re managed, and why medical monitoring makes the difference.',
    category: 'Safety & Education',
    readingTime: '8 min read',
    publishedDate: '2026-03-24',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt:
      'An honest look at tirzepatide side effects — what\'s common, what\'s rare, how they\'re managed, and why physician monitoring makes the difference.',
    relatedSlugs: [
      'tirzepatide-philippines',
      'how-to-get-tirzepatide-philippines',
      'tirzepatide-vs-semaglutide',
    ],
    content: `You are researching tirzepatide for weight loss. You have seen the impressive clinical numbers. Now you want the part most sellers skip over: what are the actual side effects, how bad can they get, and what should you watch out for?

This is not a glossy overview. It is a direct, evidence-based account of tirzepatide's safety profile — drawn from the clinical trial data, not from marketing copy. If you are going to put something in your body, you deserve the full picture before you start.

## Where This Data Comes From

Tirzepatide's safety profile is not based on small studies or anecdotal reports. It comes from some of the largest weight management and diabetes trial programs ever conducted.

The SURPASS program (type 2 diabetes, multiple trials) and the SURMOUNT program (obesity) collectively enrolled tens of thousands of participants. The 2025 SURMOUNT-5 trial, published in the New England Journal of Medicine, directly compared tirzepatide to semaglutide in a head-to-head study — providing the most direct safety comparison available.

## The Side Effects Most People Experience

The most common side effects are gastrointestinal. This is consistent across every major tirzepatide trial and every GLP-1 class medication.

**Nausea** is the most frequently reported side effect. In SURMOUNT-1, approximately 24-33% of participants on tirzepatide experienced nausea, depending on dose.

**Other common GI effects** include diarrhea, constipation, decreased appetite, vomiting, and abdominal discomfort. These overlap with the drug's mechanism of action — slowing gastric emptying and reducing appetite inherently affects digestion.

These side effects are concentrated in the dose escalation phase — the first several weeks when the dose is increased gradually from 2.5mg to the target dose. For most patients, GI side effects are mild to moderate and diminish significantly within 4 to 8 weeks.

In SURMOUNT-5, discontinuation rates due to side effects were similar between tirzepatide and semaglutide — meaning tirzepatide is not notably harder to tolerate than the most widely used GLP-1 medication.

For a detailed comparison of side effect profiles, see [tirzepatide vs semaglutide](/learn/tirzepatide-vs-semaglutide).

## Serious but Rare Risks

**Pancreatitis.** Acute pancreatitis has been reported in clinical trials, though it remains rare. Symptoms include severe, persistent abdominal pain — often radiating to the back. If you experience this, stop the medication and seek medical attention immediately.

**Gallbladder disease.** Gallstones and related complications occurred at slightly higher rates in patients on tirzepatide compared to placebo. This is likely related to the pace of weight loss — rapid weight reduction is a known risk factor for gallstone formation.

**Thyroid C-cell tumors.** Tirzepatide and other GLP-1 class drugs caused thyroid C-cell tumors in rodent studies. This has not been observed in humans. However, the medication carries a boxed warning. It is strictly contraindicated in anyone with a personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).

**Acute kidney injury** has been reported in post-marketing surveillance, primarily in patients who became severely dehydrated due to persistent vomiting or diarrhea.

**Hypoglycemia** can occur if tirzepatide is combined with insulin or sulfonylureas. When used alone for weight management, clinically significant hypoglycemia is uncommon.

## Who Should Not Take Tirzepatide

Absolute contraindications include a personal or family history of medullary thyroid carcinoma, Multiple Endocrine Neoplasia syndrome type 2, known hypersensitivity to tirzepatide or its components, and current pregnancy or breastfeeding.

Physicians also exercise caution for patients with a history of severe pancreatitis, significant kidney impairment, or gastroparesis.

This is precisely why a physician consultation is the starting point. For a walkthrough of what the consultation looks like, see [how to get tirzepatide through a licensed physician in the Philippines](/learn/how-to-get-tirzepatide-philippines).

## How Physician Supervision Reduces Risk

The single most important safety factor with tirzepatide is not the drug — it is how the drug is managed. Proper oversight includes pre-treatment screening for contraindications, personalized dose escalation tailored to your tolerance, regular check-ins to monitor side effects, guidance on hydration and diet during the adjustment period, and access to a medical professional if something unexpected occurs.

Without this structure, patients who self-medicate face compounded risk: incorrect dosing, no screening for contraindications, products of uncertain quality, and no medical support if side effects escalate.

## Practical Side Effect Management

If you experience nausea or digestive discomfort in the early weeks, physicians commonly recommend eating smaller meals more frequently, reducing fatty or heavy foods during the escalation period, staying consistently hydrated, eating slowly and stopping when satisfied rather than full, and communicating with your care team rather than pushing through worsening symptoms.

Your physician can also extend the time spent at a lower dose before increasing — spending an extra week or two at 2.5mg or 5mg often makes a meaningful difference in tolerability.

## The Bottom Line

Tirzepatide is a well-studied medication. Its side effects are largely predictable, concentrated in the early weeks of treatment, and manageable with proper medical guidance. Serious adverse events are uncommon but real — and they underscore why this medication belongs under physician supervision.

For the full picture — what tirzepatide costs, how it works, and who it is appropriate for — see [our complete guide to tirzepatide in the Philippines](/learn/tirzepatide-philippines).`,
  },
  {
    slug: 'tirzepatide-vs-semaglutide',
    title:
      'Tirzepatide vs Semaglutide: Which Weight Loss Medication Should You Choose?',
    seoTitle:
      'Tirzepatide vs Semaglutide: Weight Loss, Side Effects & How to Choose (2026)',
    metaDescription:
      'Head-to-head comparison of tirzepatide and semaglutide — clinical weight loss data, side effects, cost in the Philippines, and how to decide with your doctor.',
    category: 'Treatment Comparison',
    readingTime: '7 min read',
    publishedDate: '2026-03-24',
    reviewedBy: 'Dr. [Physician Name]',
    reviewedByTitle: 'Medical Director, Kora Health · PRC License #[000000]',
    excerpt:
      'An evidence-based comparison of tirzepatide and semaglutide ��� weight loss data, side effects, cost in the Philippines, and how to decide with your physician.',
    relatedSlugs: [
      'tirzepatide-philippines',
      'tirzepatide-side-effects',
      'how-to-get-tirzepatide-philippines',
    ],
    content: `If you are considering GLP-1 treatment for weight management in the Philippines, you are almost certainly weighing two options: tirzepatide (Mounjaro/Zepbound) and semaglutide (Ozempic/Wegovy).

Both are effective. Both are injectable. Both require a prescription. But they are not interchangeable, and the clinical differences are now well-documented — including the first direct head-to-head trial published in 2025.

## The Mechanism: One Receptor vs Two

**Semaglutide** activates the GLP-1 receptor. This single-pathway approach reduces appetite, slows gastric emptying, and enhances insulin secretion.

**Tirzepatide** activates both GLP-1 and GIP receptors simultaneously. This dual mechanism provides broader metabolic effects — enhanced insulin sensitivity, improved fat metabolism, and more pronounced appetite suppression.

## Weight Loss: The Head-to-Head Data

The SURMOUNT-5 trial (New England Journal of Medicine, 2025) enrolled 751 adults with obesity and randomized them to tirzepatide or semaglutide at maximum tolerated doses for 72 weeks.

**Tirzepatide group:** 20.2% mean body weight reduction.
**Semaglutide group:** 13.7% mean body weight reduction.

The proportions reaching specific thresholds tell the story clearly: at least 10% weight loss was achieved by 82% of tirzepatide patients vs 61% of semaglutide patients. At least 20% was achieved by 48% vs 27%.

Tirzepatide also produced greater reductions in waist circumference — 18.4 cm versus 13.0 cm.

For a broader understanding of tirzepatide's evidence base, see [our complete guide to tirzepatide in the Philippines](/learn/tirzepatide-philippines).

## Side Effects: Comparable Profiles

In SURMOUNT-5, side effect profiles were similar between both medications. The most common adverse events were gastrointestinal — nausea, diarrhea, constipation — mostly during dose escalation. Discontinuation rates due to side effects were comparable.

Both carry the same class-level warnings: pancreatitis risk, gallbladder complications, and thyroid C-cell tumors (observed in animal studies). Both are contraindicated with a history of medullary thyroid carcinoma or MEN 2.

For a thorough review of the safety data, see [our dedicated guide to tirzepatide side effects](/learn/tirzepatide-side-effects).

## Cost and Availability in the Philippines

**Semaglutide** has been available longer locally, is stocked at more pharmacies, and compounded options are generally less expensive.

**Tirzepatide** availability has improved in 2025-2026. Compounded options are offered by a growing number of providers. It remains somewhat more expensive but the gap is narrowing.

Approximate ranges: compounded semaglutide programs ₱5,000–₱12,000 per month. Compounded tirzepatide programs ₱7,000–₱15,000 per month. Branded products are significantly more for both.

## How to Decide

**Tirzepatide may be preferred when** the clinical goal requires maximum weight reduction, the patient has metabolic comorbidities that benefit from the dual mechanism, or the patient has used semaglutide without achieving sufficient results.

**Semaglutide may be preferred when** cost is a primary constraint, the patient prefers a medication with a longer market track record, or the physician recommends it based on the patient's specific health history.

Both are legitimate, evidence-based options. The choice depends on your medical profile, goals, and physician's clinical judgment.

For a practical walkthrough of the access process, see [how to get tirzepatide in the Philippines](/learn/how-to-get-tirzepatide-philippines).`,
  },
]

// Sorted: pillar first, then rest alphabetically
export const sortedArticles: Article[] = [
  articles.find(a => a.slug === 'tirzepatide-philippines')!,
  ...articles
    .filter(a => a.slug !== 'tirzepatide-philippines')
    .sort((a, b) => a.slug.localeCompare(b.slug)),
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export function getRelatedArticles(slugs: string[]): Article[] {
  return slugs
    .map(slug => articles.find(a => a.slug === slug))
    .filter(Boolean) as Article[]
}
