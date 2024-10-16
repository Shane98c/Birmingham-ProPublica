const config = {
  style: "mapbox://styles/propublica/cl6sbkwfh003814pccvoxe6hq",
  accessToken:
    "pk.eyJ1IjoicHJvcHVibGljYSIsImEiOiJjaWt6dzNnNjQxbHBudTlrc3Nqc3NidG5qIn0.ChQFj8IDuUNxSg_I6_3Pnw",
  theme: "dark",
  start: {
    center: [-86.80453, 32.5635],
    zoom: 6.5,
    bounds: [
      [-92.1535, 29.1384],
      [-81.4155, 35.8538],
    ],
  },
  chapters: [
    {
      id: "site-info",
      alignment: "center",
      hidden: false,
      description:
        "Throughout the 20th century, Birmingham was a hub for iron and steel production, which required coke to fuel smelters.",
      location: {
        center: [-86.80453, 33.5635],
        zoom: 13.5,
        pitch: 0,
        bearing: 0,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      callback: "revertZ",
      onChapterEnter: [
        {
          layer: "coke-plant-smoke",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "coke-plant-boundary",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "Plant-label",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "Neighborhood-labels",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "mapbox-satellite-color",
          opacity: 0,
        },
        { layer: "drone", opacity: 0 },
      ],
      onChapterExit: [],
    },
    {
      id: "site-zoom",
      alignment: "center",
      hidden: false,
      description:
        "With that industry came rampant pollution. Nowhere is that more apparent than the neighborhoods surrounding the coke plant on 35th Avenue.",
      location: {
        center: [-86.80453, 33.5635],
        zoom: 13.5,
        pitch: 0,
        bearing: 0,
        speed: 0.75,
      },
      mapAnimation: "flyTo",
      callback: "revertZ",
      onChapterEnter: [
        {
          layer: "coke-plant-smoke",
          opacity: 1,
          duration: 3000,
        },
        {
          layer: "coke-plant-boundary",
          opacity: 1,
          duration: 3000,
        },
        {
          layer: "Plant-label",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "Neighborhood-labels",
          opacity: 1,
          duration: 7000,
        },
        {
          layer: "mapbox-satellite-color",
          opacity: 0,
        },
        { layer: "drone", opacity: 0 },
      ],
      onChapterExit: [],
    },

    {
      id: "1947",
      alignment: "center",
      hidden: false,
      description:
        "Aerial imagery from 1947 shows emissions billowing from the 35th Avenue site over the adjacent neighborhood of Collegeville.",
      location: {
        center: [-86.80453, 33.5635],
        zoom: 13.5,
        pitch: 0,
        bearing: 0,
        // curve: 0.2,
      },
      mapAnimation: "flyTo",
      callback: "revertZ",
      onChapterEnter: [
        {
          layer: "1947",
          opacity: 1,
          duration: 2000,
        },
        {
          layer: "coke-plant-smoke",
          opacity: 0.1,
          duration: 2000,
        },
        {
          layer: "coke-plant-boundary",
          opacity: 1,
        },
        {
          layer: "Neighborhood-labels",
          opacity: 1,
        },
        {
          layer: "35th-SFsite",
          opacity: 0,
        },
        {
          layer: "mapbox-satellite-color",
          opacity: 0,
        },
        { layer: "drone", opacity: 0 },
      ],
      onChapterExit: [
        {
          layer: "1947",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "coke-plant-smoke",
          opacity: 1,
        },
        {
          layer: "coke-plant-boundary",
          opacity: 1,
        },
      ],
    },
    {
      id: "toxmaps",
      alignment: "center",
      hidden: false,
      description: `The toxic air pollution has persisted — ProPublica’s in-depth <a href="https://projects.propublica.org/toxmap/" target="_blank">nationwide analysis</a> of an EPA model shows that industrial plants in recent years have emitted chemicals that raise the risk of cancer.
        <span class="toxMeter">
          <span class="tox-meter-marker" style="left: 30.2936%;">
            &nbsp;
          </span>
          <span class="tox-meter-marker" style="left: 60.5872%;">
            &nbsp;
          </span>
          <span style="background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 245, 240, 0.3) 100%); width: 6.85671%;">
            &nbsp;
          </span>
          <span style="background: linear-gradient(90deg, rgba(255, 245, 240, 0.3) 0%, rgba(254, 221, 205, 0.6) 100%); width: 13.4559%;">
            &nbsp;
          </span>
          <span style="background: linear-gradient(90deg, rgba(254, 221, 205, 0.6) 0%, rgba(252, 178, 151, 0.8) 100%); width: 11.4943%;">
            &nbsp;
          </span>
          <span style="background: linear-gradient(90deg, rgba(252, 178, 151, 0.8) 0%, rgba(252, 133, 100, 0.9) 100%); width: 10.0435%;">
            &nbsp;
          </span>
          <span style="background: linear-gradient(90deg, rgba(252, 133, 100, 0.9) 0%, rgba(247, 88, 64, 0.9) 100%); width: 6.5797%;">
            &nbsp;
          </span>
          <span style="background: linear-gradient(90deg, rgba(247, 88, 64, 0.9) 0%, rgba(223, 44, 38, 0.9) 100%); width: 6.75006%;">
            &nbsp;
          </span>
          <span style="background: linear-gradient(90deg, rgba(223, 44, 38, 0.9) 0%, rgba(181, 18, 23, 0.9) 100%); width: 10.8527%;">
            &nbsp;
          </span>
          <span style="background: linear-gradient(90deg, rgba(181, 18, 23, 0.9) 0%, rgba(102, 0, 14, 0.95) 100%); width: 31.1462%;">
            &nbsp;
          </span>
          <span style="background: rgba(102, 0, 14, 0.95); width: 2.82095%;">
            &nbsp;
          </span>
        </span>
        <div class="tox-meter-label-wrap">
          <span class="tox-meter-label">1 in 100,000</span>
          <span class="tox-meter-label tox-meter-label-mid" style="left: 30.2936%;">
            1 in 10,000
          </span>
          <span class="tox-meter-label tox-meter-label-mid" style="left: 60.5872%;">
            1 in 1,000
          </span>
          <span class="tox-meter-label">1 in 50</span>
        </div>
        <div class="legend-label tox-meter-label-wrap tox-meter-label">incremental lifetime cancer risk</div>
      `,
      location: {
        center: [-86.80453, 33.5635],
        zoom: 13.5,
        pitch: 0,
        bearing: 0,
        // curve: 0.2,
      },
      mapAnimation: "flyTo",
      callback: "revertZ",
      onChapterEnter: [
        {
          layer: "toxmaps-grid",
          opacity: 0.69,
          duration: 1000,
        },
        {
          layer: "toxmaps-perim",
          opacity: 0.69,
          duration: 1000,
        },
        {
          layer: "toxmaps-source",
          opacity: 1,
        },
        {
          layer: "toxmaps-source-dots",
          opacity: 1,
        },
        {
          layer: "coke-plant-smoke",
          opacity: 1,
        },
        {
          layer: "coke-plant-boundary",
          opacity: 1,
        },
        {
          layer: "Plant-label",
          opacity: 1,
        },
        {
          layer: "Neighborhood-labels",
          opacity: 1,
        },
        {
          layer: "mapbox-satellite-color",
          opacity: 0,
        },
        { layer: "drone", opacity: 0 },
      ],
      onChapterExit: [
        {
          layer: "toxmaps-grid",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "toxmaps-perim",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "toxmaps-source",
          opacity: 0,
        },
        {
          layer: "toxmaps-source-dots",
          opacity: 0,
        },
      ],
    },
    {
      id: "superfund-bdy",
      alignment: "center",
      hidden: false,
      description:
        "Residents told the EPA that for decades this plant and others gave away dirt containing toxic chemicals to residents. In 2011, the EPA designated the area a <span class='sfSite'>Superfund site</span> and launched a major effort to remove contaminated soil from affected properties.",
      location: {
        center: [-86.80453, 33.5635],
        zoom: 13.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      callback: "animateSF",
      exitCallback: "clearSF",
      onChapterEnter: [
        {
          layer: "35thave-sfsite-polygon",
          opacity: 0.1,
          duration: 4000,
        },
        {
          layer: "35th-SFsite",
          opacity: 1,
          duration: 0,
        },
        {
          layer: "coke-plant-smoke",
          opacity: 1,
        },
        {
          layer: "coke-plant-boundary",
          opacity: 1,
        },
        {
          layer: "Plant-label",
          opacity: 1,
        },
        {
          layer: "Neighborhood-labels",
          opacity: 1,
        },
        {
          layer: "mapbox-satellite-color",
          opacity: 0,
        },
        { layer: "drone", opacity: 0 },
      ],
      onChapterExit: [
        {
          layer: "35thave-sfsite-polygon",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "35th-SFsite",
          opacity: 0,
          duration: 0,
        },
      ],
    },
    {
      id: "redline",
      alignment: "center",
      hidden: false,
      description: `The toll of this pollution falls disproportionately on Black residents, who were historically forced into these neighborhoods by <span class="redline">redlining</span>, or the denial of loans based on location, and other racist housing practices. Pollution has sickened residents and suppressed their homes’ property values.`,
      location: {
        center: [-86.80453, 33.5635],
        zoom: 13.5,
        pitch: 0,
        bearing: 0,
        // curve: 0.2,
      },
      mapAnimation: "flyTo",
      callback: "revertZ",
      onChapterEnter: [
        {
          layer: "redline-lines",
          opacity: 1,
          duration: 1500,
        },
        {
          layer: "redline-polygons",
          opacity: 0.4,
          duration: 1500,
        },
        {
          layer: "mapbox-satellite-color",
          opacity: 0,
        },
        {
          layer: "drone",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "coke-plant-smoke",
          opacity: 1,
        },
        {
          layer: "coke-plant-boundary",
          opacity: 1,
        },
        {
          layer: "Plant-label",
          opacity: 1,
        },
        {
          layer: "Neighborhood-labels",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "redline-lines",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "redline-polygons",
          opacity: 0,
          duration: 1500,
        },
      ],
    },
    {
      id: "neighborhood",
      alignment: "center",
      hidden: false,
      description:
        "Residents like Lamar Mabry live with the dread of what the pollution may be doing to them.",
      location: {
        center: [-86.801935, 33.560152],
        zoom: 19.2,
        pitch: 0,
        bearing: 2,
      },
      mapAnimation: "flyTo",
      callback: "revertZ",
      onChapterEnter: [
        {
          layer: "mapbox-satellite-color",
          opacity: 1,
          duration: 2000,
        },
        {
          layer: "drone",
          opacity: 1,
          duration: 4000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "z",
      alignment: "center",
      hidden: false,
      description:
        "Mabry fears that letting his grandchildren play in the backyard could harm their health.<span id='startVid'></span>",
      location: {
        center: [-86.801935, 33.560152],
        zoom: 19.2,
        pitch: 0,
        bearing: 2,
      },
      mapAnimation: "flyTo",
      callback: "changeZ",
      onChapterEnter: [
        {
          layer: "mapbox-satellite-color",
          opacity: 1,
        },
        {
          layer: "drone",
          opacity: 1,
        },
      ],
      onChapterExit: [],
    },
  ],
};
