export const lessons2016 = [
  {
    year: "2016",
    title: "2016 - object-fit 与媒体裁切",
    description: "object-fit 让图片和视频像背景图一样裁切，同时保留语义化媒体元素。",
    summary: "使用 object-fit: cover、object-position 和 aspect-ratio 构建稳定的封面、头像和缩略图。",
    coreExplanation: [
      "object-fit 控制 replaced element 的内容如何填充盒子，例如 img、video。cover 会裁切填满，contain 会完整显示但可能留白。",
      "object-position 决定裁切时保留哪个焦点位置，适合头像、封面和商品图。",
      "相比把图片当背景图，img 保留了 alt、懒加载和语义，通常更适合真实内容图片。"
    ],
    exampleHtml: `<figure class="cover-card">
  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="桌面上的代码编辑器">
  <figcaption>课程封面</figcaption>
</figure>`,
    exampleCss: `.cover-card {
  width: min(100%, 360px);
  margin: 0;
}

.cover-card img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
}

.cover-card figcaption {
  margin-top: 10px;
  color: #667085;
}
`,
    exercise: [
      "把 object-fit 改成 contain，比较留白和裁切差异",
      "调整 object-position 到 left top，观察焦点位置",
      "用同样方法制作一个正方形头像裁切"
    ]
  },
  {
    year: "2016",
    title: "2016 - CSS Mask 与 clip-path 裁切",
    description: "clip-path 和 mask 让元素可以被裁成多边形、圆形或渐隐形状，减少额外图片素材。",
    summary: "使用 clip-path 做几何裁切，用 mask-image 做透明渐隐和复杂视觉边界。",
    coreExplanation: [
      "clip-path 用几何形状裁切元素，裁掉的区域不可见也不会响应点击命中。",
      "mask 使用透明度决定哪些像素可见，适合渐隐、复杂边缘和图像遮罩。",
      "裁切和遮罩只改变绘制结果，不改变元素原本的布局盒子，所以周围布局仍按原尺寸计算。"
    ],
    exampleHtml: `<div class="cutout-card">
  <span>CSS Shape</span>
</div>`,
    exampleCss: `.cutout-card {
  display: grid;
  width: 260px;
  height: 150px;
  place-items: center;
  clip-path: polygon(0 0, 100% 0, 88% 100%, 0 86%);
  background: linear-gradient(135deg, #133f5c, #1b7f79);
  color: #ffffff;
  font-weight: 900;
}

.cutout-card:hover {
  clip-path: circle(42% at 50% 50%);
}
`,
    exercise: [
      "把 polygon 改成 inset()，做一个斜角减少的版本",
      "使用 circle() 或 ellipse() 制作圆形裁切",
      "为裁切变化添加 transition，观察哪些形状能平滑过渡"
    ]
  }
];
