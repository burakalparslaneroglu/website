// Bu dosyayı GitHub üzerinden düzenleyerek profil, ders ve yayın bilgisini güncelleyebilirsiniz.
export const profile = {
  name: "Burak Alparslan Eroğlu",
  title: "Doç. Dr. · İktisat Bölümü",
  institution: "İzmir Bakırçay Üniversitesi",
  cvUrl: "https://drive.google.com/file/d/15W_dLVAqUWNmGhJL6QCFGJsQH_DzhuDk/view?usp=share_link",
  researchUrl: "https://sites.google.com/view/burakalparslaneroglu/research-and-codes",
  teachingUrl: "https://sites.google.com/view/burakalparslaneroglu/teaching",
  bio: "Araştırmalarım zaman serisi ve ekonometrik yöntemlerin kuramsal gelişimi ile bu yöntemlerin iktisadi ve finansal problemlerdeki asimptotik ve küçük örneklem çıkarımlarına uygulanmasına odaklanır.",
  detail: "Özellikle dalgacıklar, kesirli bütünleşme, sınırlı süreçler, durağan olmayan volatilite ve bootstrap yöntemlerinden yararlanarak ekonomik ve finansal değişkenlerin mevsimsel ve sıfır frekanslı bütünleşme ve eşbütünleşme özelliklerini inceliyorum.",
};

export const courses = [
  ["IKT 102", "Makroekonominin İlkeleri", "Türkçe"],
  ["IKT 302", "Bilimsel Araştırma Yöntemleri", "Türkçe"],
  ["IKT 526", "Python ile Uygulamalı Zaman Serisi Analizi", "Türkçe"],
] as const;

export const publications = [
  { year: "2024", title: "A mixed-frequency VAR application to studying joint dynamics of foreign investor trading and stock market returns", journal: "Empirical Economics", url: "https://doi.org/10.1007/s00181-023-02541-4" },
  { year: "2023", title: "Pairs Trading with Wavelet Transform", journal: "Quantitative Finance, 23(7–8), 1129–1154", url: "https://sites.google.com/view/burakalparslaneroglu/research-and-codes" },
  { year: "2023", title: "Bounded unit root processes with nonstationary volatility", journal: "Communications in Statistics – Simulation and Computation, 52(4), 1245–1263" },
  { year: "2022", title: "Non-parametric seasonal unit root tests under periodic non-stationary volatility", journal: "Computational Statistics, 37(5), 2581–2636" },
  { year: "2022", title: "Time-Varying Cointegration and the Kalman Filter", journal: "Econometric Reviews, 41(1), 1–21" },
  { year: "2022", title: "Heterogeneous Effects of Unconventional Monetary Policy on the Bond Yields across the Euro Area", journal: "Journal of Money, Credit and Banking, 54(5), 1425–1457" },
  { year: "2022", title: "Regulated seasonal unit root process", journal: "Studies in Nonlinear Dynamics & Econometrics, 26(3), 361–385" },
  { year: "2021", title: "On the performance of the variance ratio unit root tests with flexible Fourier form", journal: "Journal of Applied Statistics, 48, 2560–2579" },
  { year: "2019", title: "Wavelet variance ratio cointegration test and wavestrapping", journal: "Journal of Multivariate Analysis, 171, 298–319" },
  { year: "2018", title: "Powerful nonparametric seasonal unit root tests", journal: "Economics Letters, 167, 75–80" },
  { year: "2017", title: "How Successful Are Wavelets in Detecting Jumps?", journal: "Entropy, 19(12), 638" },
  { year: "2016", title: "A nonparametric unit root test under nonstationary volatility", journal: "Economics Letters, 140, 6–10" },
] as const;
